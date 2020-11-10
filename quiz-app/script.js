const quizData = [{
        question: 'What is the current capital of Ukraine?',
        a: 'Odessa',
        b: 'Kyiv',
        c: 'Kharkiv',
        d: 'Lviv',
        correct: 'b'
    },
    {
        question: 'What is the first capital of Ukraine?',
        a: 'Odessa',
        b: 'Kyiv',
        c: 'Kharkiv',
        d: 'Lviv',
        correct: 'c'
    },
    {
        question: 'Which the city of the list have the border with Poland?',
        a: 'Odessa',
        b: 'Kyiv',
        c: 'Kharkiv',
        d: 'Lviv',
        correct: 'd'
    },
    {
        question: 'Which the city of the list is located near Red Sea?',
        a: 'Odessa',
        b: 'Kyiv',
        c: 'Kharkiv',
        d: 'Lviv',
        correct: 'a'
    },
    {
        question: 'Which the city of the list Taras Shevchenko was born?',
        a: 'Lviv',
        b: 'Kyiv',
        c: 'Kharkiv',
        d: 'No correct answer',
        correct: 'd'
    },

]

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz')


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function getSelected() {

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}



submitBtn.addEventListener('click', () => {

    const answer = getSelected();
   
    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You have answered at ${score}/ ${quizData.length} questions. </h2> <button onclick='location.reload()'>Reload</button>`
        }
    }
})