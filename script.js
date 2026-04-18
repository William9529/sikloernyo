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