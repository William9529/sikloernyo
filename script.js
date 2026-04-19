// Segédfüggvény a kereséshez (hogy ne törje el a HTML tageket)
function highlightText(text, query) {
    if (!query) return text;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = text.split(/(<[^>]*>)/);
    return parts.map(part => part.startsWith('<') ? part : part.replace(regex, '<mark>$1</mark>')).join('');
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results-container');
    resultsContainer.innerHTML = '';
    if (query.length < 2) return;
    
    let hasResults = false;
    const allData = { 'A': examDataA, 'B': examDataB };
    
    for (const [examName, data] of Object.entries(allData)) {
        for (const [topicName, questions] of Object.entries(data)) {
            questions.forEach(item => {
                if (item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)) {
                    hasResults = true;
                    const qDetails = document.createElement('details');
                    qDetails.className = 'question-details';
                    // Extra span beiktatása a CSS formázás miatt
                    qDetails.innerHTML = `
                        <summary><span>
                            <span class="badge">${examName} vizsga | ${topicName}</span><br>
                            ${highlightText(item.q, query)}
                        </span></summary>
                        <div class="answer">${highlightText(item.a, query)}</div>
                    `;
                    resultsContainer.appendChild(qDetails);
                }
            });
        }
    }
    if (!hasResults) resultsContainer.innerHTML = '<p style="text-align:center;color:#8E8E93;padding:20px;font-weight:500;">Nincs találat erre a szóra...</p>';
    if (window.MathJax) MathJax.typesetPromise([resultsContainer]);
}

function handleSearchKeyPress(event) {
    if (event.key === "Enter") performSearch();
}

function loadExam(examType) {
    document.getElementById('home-view').classList.remove('active');
    document.getElementById('exam-view').classList.add('active');
    document.getElementById('exam-title').textContent = `"${examType}" vizsga`;
    
    const container = document.getElementById('topics-container');
    container.innerHTML = '';
    const topics = (examType === 'A') ? examDataA : examDataB;
    
    for (const [topicName, questions] of Object.entries(topics)) {
        const topicDetails = document.createElement('details');
        topicDetails.className = 'topic-details';
        topicDetails.innerHTML = `<summary><span>${topicName}</span></summary>`;
        
        const contentDiv = document.createElement('div');
        contentDiv.style.padding = "0 10px 10px 10px";
        
        questions.forEach(item => {
            const qDiv = document.createElement('details');
            qDiv.className = 'question-details';
            qDiv.innerHTML = `<summary><span>${item.q}</span></summary><div class="answer">${item.a}</div>`;
            contentDiv.appendChild(qDiv);
        });
        
        topicDetails.appendChild(contentDiv);
        container.appendChild(topicDetails);
    }
    if (window.MathJax) MathJax.typesetPromise([container]);
}

function goHome() {
    document.getElementById('exam-view').classList.remove('active');
    document.getElementById('home-view').classList.add('active');
}

// PINCH-TO-ZOOM ÉS MODAL LOGIKA
let scale = 1;
let lastDist = 0;
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('expanded-img');

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('exam-image')) {
        scale = 1;
        modalImg.style.transform = `scale(${scale})`;
        modalImg.src = e.target.src;
        modal.classList.add('show');
    }
});

function closeModal(e) {
    if (e.target.id === 'image-modal' || e.target.closest('.close-btn')) {
        modal.classList.remove('show');
    }
}

// Érintéskezelés a nagyításhoz
modal.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
        lastDist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
    }
});

modal.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
        e.preventDefault();
        const dist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
        const delta = dist / lastDist;
        scale *= delta;
        if (scale < 1) scale = 1;
        if (scale > 10) scale = 10;
        
        modalImg.style.transform = `scale(${scale})`;
        lastDist = dist;
    }
}, { passive: false });

// Service Worker regisztráció
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js');
    });
}