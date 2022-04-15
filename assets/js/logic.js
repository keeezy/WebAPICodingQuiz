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
var initalsEl = document.getElementById("initials")

function startQuiz() {
    //start menu is hidden
    startMenuEl.setAttribute("class", "hide");
    
    questionsEl.removeAttribute("class")
    // console.log(questionsEl) verified class attribute was removed

    // start timeclock
    timer = setInterval(clockCount,1000)
    timer.textContent = timeLeft;

}

// Clock count function
function clockCount() {
    // update time
    timeLeft--;
    timeEl.textContent = timeLeft

    // user ran out of time, quiz ends
    if (timeLeft <= 0) {
        quizEnd();
    }
}

startBtn.onclick = startQuiz;
