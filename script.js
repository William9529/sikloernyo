// --- Navigációs logika és HTML generálás ---
function loadExam(examType) {
    document.getElementById('home-view').classList.remove('active');
    document.getElementById('exam-view').classList.add('active');
    document.getElementById('exam-title').textContent = `"${examType}" Vizsga Témakörei`;
    
    const container = document.getElementById('topics-container');
    container.innerHTML = '';

    const topics = examType === 'A' ? examDataA : examDataB;

    for (const [topicName, questions] of Object.entries(topics)) {
        const topicDetails = document.createElement('details');
        topicDetails.className = 'topic-details';
        
        const topicSummary = document.createElement('summary');
        topicSummary.textContent = topicName;
        topicDetails.appendChild(topicSummary);

        const topicContent = document.createElement('div');
        topicContent.className = 'topic-content';

        questions.forEach(item => {
            const qDetails = document.createElement('details');
            qDetails.className = 'question-details';

            const qSummary = document.createElement('summary');
            qSummary.textContent = item.q;

            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer';
            answerDiv.innerHTML = item.a;

            qDetails.appendChild(qSummary);
            qDetails.appendChild(answerDiv);
            topicContent.appendChild(qDetails);
        });

        topicDetails.appendChild(topicContent);
        container.appendChild(topicDetails);
    }

    if (window.MathJax) {
        MathJax.typesetPromise([container]).catch((err) => console.log(err.message));
    }
}

function goHome() {
    document.getElementById('exam-view').classList.remove('active');
    document.getElementById('home-view').classList.add('active');
}

// --- KERESŐ LOGIKA ---
function handleSearchKeyPress(event) {
    if (event.key === "Enter") {
        performSearch();
    }
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results-container');
    
    resultsContainer.innerHTML = '';

    if (!query) return;

    let hasResults = false;

    const searchInData = (data, examName) => {
        for (const [topicName, questions] of Object.entries(data)) {
            questions.forEach(item => {
                const qLower = item.q.toLowerCase();
                const aLower = item.a.toLowerCase();
                const topicLower = topicName.toLowerCase();

                if (qLower.includes(query) || aLower.includes(query) || topicLower.includes(query)) {
                    hasResults = true;
                    
                    const resultItem = document.createElement('details');
                    resultItem.className = 'question-details search-result-item';
                    
                    const summary = document.createElement('summary');
                    summary.innerHTML = `<span class="badge">"${examName}" vizsga | ${topicName}</span><br>${item.q}`;
                    
                    const answerDiv = document.createElement('div');
                    answerDiv.className = 'answer';
                    answerDiv.innerHTML = item.a;

                    resultItem.appendChild(summary);
                    resultItem.appendChild(answerDiv);
                    resultsContainer.appendChild(resultItem);
                }
            });
        }
    };

    searchInData(examDataA, 'A');
    searchInData(examDataB, 'B');

    if (!hasResults) {
        resultsContainer.innerHTML = '<p class="no-results">Nincs találat erre a kifejezésre.</p>';
    }

    if (window.MathJax) {
        MathJax.typesetPromise([resultsContainer]).catch((err) => console.log(err.message));
    }
}

// --- KÉPNÉZEGETŐ (LIGHTBOX) LOGIKA ---
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('exam-image')) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('expanded-img');
        
        modalImg.src = e.target.src;
        modalImg.classList.remove('zoomed');
        modal.classList.add('show');
    }
});

function toggleZoom(event) {
    event.stopPropagation(); 
    const img = event.target;
    img.classList.toggle('zoomed');
}

function closeModal(event) {
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    if (event.target === modal || event.target === closeBtn) {
        modal.classList.remove('show');
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modal = document.getElementById('image-modal');
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    }
});

// --- PWA (Offline App) Regisztráció ---
// --- PWA (Offline App) Regisztráció és Frissítés Kezelés ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(reg => {
            
            // Figyeljük, ha új SW érkezik
            reg.addEventListener('updatefound', () => {
                const newWorker = reg.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        showUpdateNotification(newWorker);
                    }
                });
            });

            // Ha frissítés történt, az oldal újraindul, és ez az esemény fut le
            let refreshing = false;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (!refreshing) {
                    window.location.reload();
                    refreshing = true;
                }
            });
        });
    });
}

function showUpdateNotification(worker) {
    // Egy egyszerű confirm ablakot használunk, de készíthetsz egy szebb felugró div-et is
    const userConfirmed = confirm("Új verzió érhető el a vizsgafelkészítőből. Szeretnéd frissíteni?");
    if (userConfirmed) {
        // Üzenetet küldünk a várakozó SW-nek, hogy aktiválódjon
        worker.postMessage({ action: 'skipWaiting' });
    }
}

