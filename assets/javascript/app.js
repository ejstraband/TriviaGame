// questions


// data variables
var timeToComplete = 10;
var totalQuestions = 8;
var correctAnswers = 0;
var incorrectAnswers = 0;

// html element variables
var countdownTimer = 30 ;
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

function startGame() {
	// alert("Game Start!");
	startDone = "Finished";
	$("#welcomeBox").hide();
	$("#questions").show();
	$("#timer").show();
	$("#startDoneButton").html("<button>" + startDone + "</button>");
	timerStart();
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
	// alert("Game Over");
	$("#questions").hide();
	$("#timer").hide();
	$("#scorecard").show();
	$("#startDoneButton").hide();
	scoreTheAnswers();
	winLose();
}

function countdownReadout() {
	countdownTimer--;
	$("#timer").html("<h2> Seconds Remaining: " + countdownTimer + "</h2>")
}

function timerStart() {
	setTimeout(endGame, 1000 * countdownTimer);
	countdownReadout();
}

function writeOutQuestions() {

}

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