// Quiz state variables
var timeLeft = 90
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
    
    
}


startBtn.onclick = startQuiz;
