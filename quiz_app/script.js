const quizData = [
    {
        question : '나이를 맞춰보세요!',
        a: '10',
        b: '20',
        c: '24',
        d: '27',
        correct: 'c',
    }, {
        question: '이름을 맞춰보세요!',
        a: '심돌쇠',
        b: '심영민',
        c: '심개똥',
        d: '심술',
        correct: 'b',
    },{
        question: '가장 좋아하는 음식을 맞춰보세요!',
        a:'치킨',
        b:'피자',
        c:'초밥',
        d:'햄버거',
        correct: 'a' ,
    },{
        question: '가장 좋아하는 색깔을 맞춰보세요!',
        a:'주황',
        b:'검정',
        c:'흰색',
        d:'파랑',
        correct: 'a' ,
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deSelectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deSelectAnswers(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
        score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `<h2> 당신의 점수는 ${score}/${quizData.length} 입니다.</h2>`;
        }

    }
});
