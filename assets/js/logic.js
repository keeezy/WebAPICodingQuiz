// Quiz state variables
var time = 90
// time = 90 seconds
var currentQuestionIndex = 0

// Variables to manipulate DOM elements
var startBtn = document.querySelector(".start-btn");
var submitBtn = document.getElementById("submit")
var timeEl = document.getElementById("time");
var choicesEl = document.querySelector(".choices")
var questionsEl = document.querySelector(".hide")
var startMenuEl = document.querySelector(".start")