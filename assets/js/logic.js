// Quiz state variables
var timeLeft = 90
var timer;
// time = 90 seconds
var currentQuestionIndex = 0

// Variables to manipulate DOM elements
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit")
var timeEl = document.getElementById("time");
var choicesEl = document.querySelector(".choices")
var questionsEl = document.querySelector(".hide")
var startMenuEl = document.getElementById("start-menu")
var finalMenuEl = document.getElementById("final-page")
var initalsEl = document.getElementById("initials")
var correctEl = document.getElementById("correct-answer")
var incorrectEl = document.getElementById("incorrect-answer")

// Function to start trivia
function startQuiz() {
    //start menu is hidden
    startMenuEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class")
    // console.log(questionsEl) verified class attribute was removed

    // start timeclock
    timer = setInterval(clockCount, 1000)
    timer.textContent = timeLeft;

    showQuestion();
}

// Function to show questions
function showQuestion() {


    // Current question in array
    var currentQ = questions[currentQuestionIndex];

    // Title with current question is shown
    var titleEl = document.getElementById("question-title");

    // created variable title element, pulling title from questions array object
    // text content changes to current question title using dot notation
    titleEl.textContent = currentQ.title;

    //clears old questions
    choicesEl.innerHTML = "",

        //loop choices
        currentQ.choices.forEach(function (choice) {
            // create a button
            var choiceNode = document.createElement("button");
            choiceNode.setAttribute("class", "choice");
            choiceNode.setAttribute("value", choice);

            choiceNode.textContent = choice;

            choiceNode.onclick = questionClick;

            choicesEl.appendChild(choiceNode);
        });


}

// Correct function
function correctAnswer() {
    correctEl.removeAttribute("class")
    // feedback function for correct answer, spongebob is shown for correct answer
    setTimeout(function () {
        correctEl.setAttribute("class", "hide");
    }, 700)

    currentQuestionIndex++;


}

// incorrect function
function incorrectAnswer() {
    incorrectEl.removeAttribute("class")
    // feedback function for wrong answer, squidward is shown for incorrect answer
    setTimeout(function () {
        incorrectEl.setAttribute("class", "hide");
    }, 700)
}

function questionClick() {
    if (this.value === questions[currentQuestionIndex].answer) {
        correctAnswer();
    } else {
        incorrectAnswer();
        timeLeft -= 10;


    }





    if (currentQuestionIndex === questions.length) {
        triviaEnd();
    } else {
        showQuestion();
    }


}



// Clock count function
function clockCount() {
    // update time
    timeLeft--;
    timeEl.textContent = timeLeft

    // user ran out of time, quiz ends
    if (timeLeft <= 0) {
        triviaEnd();
    }
}


// Function for trivia to end
function triviaEnd() {
    //stops bobclock when finished
    clearInterval(timer)

    // Set attribute class to nothing, for final menu to show
    finalMenuEl.setAttribute("class", "")

    // Set attribute class to 'hide' for questions to be hidden
    questionsEl.setAttribute("class", "hide");
}


startBtn.onclick = startQuiz;
console.log(showQuestion)



// function questionClick() {
//     if (this.value === questions[currentQuestionIndex].answer) {
//         timeLeft -=10;
//         console.log("incorrect answer!")

//         if (timeLeft <0) {
//             timeLeft= 0;
//         }

//         timeEl.textContent = timeLeft;

//         alert("Wrong answer!");


//     } else {
//         alert("Correct!!!");

//     }
// }