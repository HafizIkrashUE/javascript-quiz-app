const quizData = [
    {
        question: "1. What does HTML stand for?",
        answers: [
            "i. Hyper Text Markup Language",
            "ii. High Text Machine Language",
            "iii. Hyper Transfer Markup Language",
            "iv. Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "2. Which language is used for styling web pages?",
        answers: [
            "i. HTML",
            "ii. Python",
            "iii. CSS",
            "iv. Java"
        ],
        correct: 2
    },
    {
        question: "3. Which keyword is used to declare a variable in JavaScript?",
        answers: [
            "i. int",
            "ii. var",
            "iii. string",
            "iv. float"
        ],
        correct: 1
    },
    {
        question: "4. Which method is used to select an element by id?",
        answers: [
            "i. querySelectorAll()",
            "ii. getElementById()",
            "iii. getElementsByClassName()",
            "iv. createElement()"
        ],
        correct: 1
    },
    {
        question: "5. Which symbol is used for comments in JavaScript?",
        answers: [
            "i. /* */",
            "ii. //",
            "iii. #",
            "iv. <!-- -->"
        ],
        correct: 1
    }
];

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    answers.innerHTML = "";

    question.textContent = quizData[currentQuestion].question;

    quizData[currentQuestion].answers.forEach(function(answer, index) {
        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer");

        button.addEventListener("click", function() {
            checkAnswer(index, button);
        });

        answers.appendChild(button);
    });
}

function checkAnswer(selected, button) {
    const correct = quizData[currentQuestion].correct;

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    if (selected === correct) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
        buttons[correct].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", function() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        document.getElementById("quiz").innerHTML = `
            <h2>Your Score</h2>
            <h1>${score} / ${quizData.length}</h1>
            <button onclick="location.reload()">Play Again</button>
        `;
    }
});

loadQuestion();