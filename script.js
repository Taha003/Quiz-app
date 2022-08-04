var quiz = [
    {
        question: 'Q1: Who is the founder of Pakistan?',
        a: 'Allama Iqbal',
        b: 'Quaid e Azam',
        c: 'Liaquat Ali Khan',
        d: 'Fatima Ali Jinnah',
        ans: 'ans2'
    },
    {
        question: 'Q2: In which year Pakistan got Independence',
        a: '1937',
        b: '1920',
        c: '1947',
        d: '1847',
        ans: 'ans3'
    },
    {
        question: 'Q3: Who was the first prime minister of Pakistan?',
        a: 'Maulana Mohammad Ali Jauhar',
        b: 'Zia ul Haq',
        c: 'Zulfiqar Ali  Bhutto',
        d: 'Liaquat Ali Khan',
        ans: 'ans4'
    }
]

let question = document.querySelector('.question');
let option1 = document.querySelector('#option1')
let option2 = document.querySelector('#option2')
let option3 = document.querySelector('#option3')
let option4 = document.querySelector('#option4')
let answers = document.querySelectorAll('.answer')
let score = 0
var ques = 0;
let showScore = document.querySelector('#showScore')
function reLoad() {
    question.innerHTML = quiz[ques].question;
    option1.innerHTML = quiz[ques].a;
    option2.innerHTML = quiz[ques].b;
    option3.innerHTML = quiz[ques].c;
    option4.innerHTML = quiz[ques].d;
}

reLoad()

function deSelectAll() {
    answers.forEach(function (elem) {
        elem.checked = false
    })
}

function checkAnswer() {
    let answer;
    answers.forEach(function (elem) {
        if (elem.checked) {
            answer = elem.id;
        }
    })

    if (answer == quiz[ques].ans) {
        score++
    }
    deSelectAll()
    ques++;
    if (ques < quiz.length) {
        reLoad();
    }
    else {
        showScore.innerHTML = `<h2>Your score is ${score}/${quiz.length} </h2>
        <button class="btn" onclick="location.reload()">Attempt Again</button>`

        showScore.classList.remove('scoreArea')


    }

}

