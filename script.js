// Segédfüggvény a kiemeléshez
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Főoldali kereső
function handleSearchKeyPress(event) {
    if (event.key === "Enter") performSearch();
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
                    
                    const highlightedQ = highlightText(item.q, query);
                    const highlightedA = highlightText(item.a, query);

                    qDetails.innerHTML = `
                        <summary>
                            <div>
                                <span class="badge">${examName} vizsga | ${topicName}</span><br>
                                ${highlightedQ}
                            </div>
                        </summary>
                        <div class="answer">${highlightedA}</div>
                    `;
                    resultsContainer.appendChild(qDetails);
                }
            });
        }
    }

    if (!hasResults) {
        resultsContainer.innerHTML = '<p style="text-align:center; padding:10px; color:gray;">Nincs találat...</p>';
    }
    if (window.MathJax) MathJax.typesetPromise([resultsContainer]);
}

// Vizsga betöltése
function loadExam(examType) {
    document.getElementById('home-view').classList.remove('active');
    document.getElementById('exam-view').classList.add('active');
    document.getElementById('exam-title').textContent = `"${examType}" vizsga témakörei`;
    
    const container = document.getElementById('topics-container');
    container.innerHTML = '';
    const topics = (examType === 'A') ? examDataA : examDataB;

    for (const [topicName, questions] of Object.entries(topics)) {
        const topicDetails = document.createElement('details');
        topicDetails.className = 'topic-details';
        topicDetails.innerHTML = `<summary>${topicName}</summary>`;
        
        const contentDiv = document.createElement('div');
        questions.forEach(item => {
            const qDiv = document.createElement('details');
            qDiv.className = 'question-details';
            qDiv.innerHTML = `<summary>${item.q}</summary><div class="answer">${item.a}</div>`;
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

// Modal kezelés (képnézegető)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('exam-image')) {
        const modal = document.getElementById('image-modal');
        const img = document.getElementById('expanded-img');
        img.src = e.target.src;
        img.classList.remove('zoomed');
        modal.classList.add('show');
    }
});

function closeModal() { document.getElementById('image-modal').classList.remove('show'); }
function toggleZoom(e) { e.stopPropagation(); e.target.classList.toggle('zoomed'); }

// PWA Service Worker regisztráció
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(reg => {
            reg.onupdatefound = () => {
                const installingWorker = reg.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        if (confirm("Új tartalom érhető el. Frissíted?")) window.location.reload();
                    }
                };
            };
        });
    });
}