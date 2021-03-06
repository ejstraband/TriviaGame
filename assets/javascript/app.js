// questions


// data variables
var totalQuestions = 8;
var correctAnswers = 0;
var incorrectAnswers = 0;

// html element variables
var timeLimit = 45;
var timerDisplay;
var questionsDiv = "questions";
var startDone = "Start";

// functions
function pageSetup() {
	console.log("Running Page Setup");
	$("#welcomeBox").show();
	$("#questions").hide();
	$("#timer").hide();
	$("#scorecard").hide();
}

function runTimer() {
  timerDisplay = setInterval(decrement, 1000);
}

function decrement() {
	timeLimit = (timeLimit - 1);
	$("#timer").html("<h2> Seconds Remaining: " + timeLimit + "</h2>");
	if (timeLimit === 0) {
	endGame();
	}
}

function startGame() {
	// alert("Game Start!");
	startDone = "Finished";
	$("#welcomeBox").hide();
	$("#questions").show();
	$("#timer").show();
	$("#startDoneButton").html("<button>" + startDone + "</button>");
	runTimer();
}

function scoreTheAnswers() {
	// alert("Here's your score!")
	// find all "right" Q values
	correctAnswers = document.querySelectorAll('[value="right"]:checked').length;
	incorrectAnswers = document.querySelectorAll('[value="wrong"]:checked').length;
	unansweredQuestions = (totalQuestions - correctAnswers - incorrectAnswers);
	$("#correctAnswers").text("Correct Answers: " + correctAnswers);
	$("#incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers);
	$("#unansweredQuestions").text("Unanswered Questions: " + unansweredQuestions);
	}

function endGame() {
	clearInterval();
	$("#questions").hide();
	$("#timer").hide();
	$("#scorecard").show();
	$("#startDoneButton").hide();
	scoreTheAnswers();
	winLose();
}

// function writeOutQuestions() {

// }

function winLose() {
	if (correctAnswers > 5) {
	$("#sadKermit").hide();		
	} else {
	$("#happyKermit").hide();		
	}
}

// main game logic
pageSetup();

// click the start/done button
$("#startDoneButton").click( function() {
	// if the start button says "start"
	if (startDone === "Start") {
		// start the game
		startGame();
	// if the start button says "finished"
	} else {
		// end the game
		endGame();
	}
});