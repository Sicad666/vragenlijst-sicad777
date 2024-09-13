const questions = [
    "Wanneer ben je jarig?",
    "Hoe lang ben je?",
    "Wat is je favoriete kleur?",
    "Wie bezorgd je een glimlach?",
    "Welke sport(en) doe je?",
    "Als je 1 ding kon veranderen aan jezelf wat zou 't zijn?",
    "Heb je piercings of tatoeages?",
    "Wat is je lievelingseten?",
    "Wat doe je het liefst in je vrije tijd?",
    "Kan je goed zingen?",
    "Hoe oud ben je?",
    "Wat vind je je meest positieve eigenschap?",
    "Wat was je eerste indruk van mij en tot nu toe?",
    "Favoriete rapper en/of artiest algemeen?"
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
