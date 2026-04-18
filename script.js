// Navigációs logika és HTML generálás
function loadExam(examType) {
    document.getElementById('home-view').classList.remove('active');
    document.getElementById('exam-view').classList.add('active');
    document.getElementById('exam-title').textContent = `"${examType}" Vizsga Témakörei`;
    
    const container = document.getElementById('topics-container');
    container.innerHTML = '';

    // Megfelelő adatbázis kiválasztása a paraméter alapján
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

    // Újra-rendereljük a matematikai képleteket az új tartalmon
    if (window.MathJax) {
        MathJax.typesetPromise([container]).catch((err) => console.log(err.message));
    }
}

function goHome() {
    document.getElementById('exam-view').classList.remove('active');
    document.getElementById('home-view').classList.add('active');
}

// --- ÚJ: KERESŐ LOGIKA ---

function handleSearchKeyPress(event) {
    if (event.key === "Enter") {
        performSearch();
    }
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results-container');
    
    // Előző találatok törlése
    resultsContainer.innerHTML = '';

    // Ha üres a kereső, nem csinálunk semmit
    if (!query) return;

    let hasResults = false;

    // Segédfüggvény az adatokban való kereséshez
    const searchInData = (data, examName) => {
        for (const [topicName, questions] of Object.entries(data)) {
            questions.forEach(item => {
                const qLower = item.q.toLowerCase();
                const aLower = item.a.toLowerCase();
                const topicLower = topicName.toLowerCase();

                // Keresés szórészletre témakörben, kérdésben vagy válaszban
                if (qLower.includes(query) || aLower.includes(query) || topicLower.includes(query)) {
                    hasResults = true;
                    
                    const resultItem = document.createElement('details');
                    resultItem.className = 'question-details search-result-item';
                    
                    const summary = document.createElement('summary');
                    // Egy kis jelvény(badge), ami megmutatja honnan van a kérdés
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

    // Keresés mindkét vizsgában
    searchInData(examDataA, 'A');
    searchInData(examDataB, 'B');

    // Ha nincs találat, írjunk ki üzenetet
    if (!hasResults) {
        resultsContainer.innerHTML = '<p class="no-results">Nincs találat erre a kifejezésre.</p>';
    }

    // Újra-rendereljük a MathJax képleteket a találatokban
    if (window.MathJax) {
        MathJax.typesetPromise([resultsContainer]).catch((err) => console.log(err.message));
    }
}