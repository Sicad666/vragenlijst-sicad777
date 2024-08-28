const questions = [
    "Wanneer ben je jarig?",
    "Hoe lang ben je?",
    "Wat is je favoriete kleur?",
    "Wie bezorgd je een glimlach?",
    "Wat is je lievelingskleur?",
    "Welke sport(en) doe je?",
    "Zou je me een knuffel geven?",
    "Wat voor kleur ogen vind je het mooist?",
    "Heb je piercing zo ja, waar?",
    "Wat is je lievelingseten?",
    "Wat doe je het liefst in je vrije tijd?",
    "Wat vind je van deze misschien vreemde manier van vragen stellen?",
    "Vind je jezelf knap?",
    "Kan je goed zingen?",
    "Wat doe je graag?",
    "Hoe oud ben je?",
    "Naar welk land zou je met me willen?",
    "Favoriete dj?",
    "Wat vind je van me?",
    "Favoriete rapper en artiest algemeen?",
    "Ronaldo of Messi?"
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let answers = [];

// Elementen ophalen
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const nextButton = document.getElementById('next-button');
const skipButton = document.getElementById('skip-button');
const completionMessage = document.getElementById('completion-message');
const answerList = document.getElementById('answer-list');

// Vragen schudden
function shuffleQuestions() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}

// Toon eerste vraag
function showQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        questionElement.innerText = shuffledQuestions[currentQuestionIndex];
        questionContainer.style.display = 'block';
        completionMessage.style.display = 'none';
        answerInput.value = ''; // Maak het inputveld leeg
        answerInput.focus();
    } else {
        displayAnswers(); // Antwoorden tonen wanneer klaar
    }
}

// Ga naar volgende vraag
function nextQuestion() {
    const answer = answerInput.value;
    if (answer.trim() !== '') {
        answers.push(answer);
        currentQuestionIndex++;
        showQuestion();
    }
}

// Sla vraag over
function skipQuestion() {
    answers.push("Overgeslagen");
    currentQuestionIndex++;
    showQuestion();
}

// Antwoorden tonen
function displayAnswers() {
    questionContainer.style.display = 'none';
    completionMessage.style.display = 'block';

    // Voeg elke vraag en bijbehorend antwoord toe aan de lijst
    shuffledQuestions.forEach((question, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${question}: ${answers[index]}`;
        answerList.appendChild(listItem);
    });
}

// Event listeners voor knoppen
nextButton.addEventListener('click', nextQuestion);
skipButton.addEventListener('click', skipQuestion);

// Event listener voor de Enter-toets
answerInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        nextQuestion();
    }
});

// Start de vragenlijst met geschudde vragen
shuffleQuestions();
showQuestion();