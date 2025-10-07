// declare initial variables
let humanScore = 0;
let computerScore = 0;
let round = 0;

playGame(round);

//  evaluate the number of rounds with if/else to see if have to play or just print the winner
function playGame(round) {
	if (round < 5) {   				//Play until 5 rounds are complete.
		computerChoice = getComputerChoice();
		let getHumanChoice = prompt("What do you choose?");
		humanChoice = getHumanChoice.toLowerCase();
		playRound(humanChoice, computerChoice);
	}
	else {     					// Print winner
		if (computerScore > humanScore) {
			console.log("Computer wins! Computer score is " + computerScore + " while your score is " + humanScore + ".");
		}
		else if (humanScore > computerScore) {
			console.log("You win! Your score is " + humanScore + " while computer score is " + computerScore + ".");
		}
		else {
			console.log("Opps! Its a tie!.")
		}
	}
}

//get computer choice
function getComputerChoice() {
	let choice;
	let num = Math.floor(Math.random() * 3);
	switch (num) {
		case 0:
			choice = "rock";
			break;
		case 1:
			choice = "paper";
			break;
		case 2:
			choice = "scissors";
			break;
	}
	return choice;
}

// play a single round of the game and increment the number of rounds. 
// input the rounds in playGame to play more rounds if needed. While printing the winner
function playRound(humanChoice, computerChoice) {
	let message;
	switch (true) {
		case (humanChoice === "rock" && computerChoice === "scissors"):
			++humanScore;
			message = "You win! Rock beats scissors!";
			break;
		case (humanChoice === "rock" && computerChoice === "paper"):
			++computerScore;
			message = "You lose! Paper beats rock!";
			break;
		case (humanChoice === "paper" && computerChoice === "scissors"):
			++computerScore;
			message = "You lose! Scissors beats paper!";
			break;
		case (humanChoice === "paper" && computerChoice === "rock"):
			++humanScore;
			message = "You win! Paper beats rock!";
			break;
		case (humanChoice === "scissors" && computerChoice === "rock"):
			++computerScore;
			message = "You lose! Rock beats scissors!";
			break;
		case (humanChoice === "scissors" && computerChoice === "paper"):
			++humanScore;
			message = "You win! Scissors beats paper!";
			break;
		case (humanChoice === computerChoice):
			message = "Oops! Its a tie!";
			break;
	}

	console.log("You chose " + humanChoice.toUpperCase() + " and computer chose " + computerChoice.toUpperCase() + "." + "\n" + message + " Your score is " + humanScore + " and computer score is " + computerScore);
	++round;
	playGame(round);    			// evaluate the number of rounds according to the previous increment to play more.
}
