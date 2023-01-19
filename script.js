const choices = ["Rock", "Paper", "Scissors"];
let computerScore = 0,
  playerScore = 0;

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  //Trim and change the player selection to lowercase
  playerSelection = playerSelection.trim().toLowerCase();
  computerSelection = computerSelection.trim().toLowerCase();
  let outputMessage;
  //If both select the same thing
  if (playerSelection == computerSelection) {
    outputMessage = "It's a draw";
    console.log(outputMessage);
    return;
  } //The  player winning scenarios
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    outputMessage = `${playerSelection} beats ${computerSelection}. Good Job!`;
    console.log(outputMessage);
    return;
  } //The computer winning scenarios
  else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    computerScore++;
    outputMessage = `${computerSelection} beats ${playerSelection}. You Lose!`;
    console.log(outputMessage);
    return;
  } else {
    outputMessage = "No valid input";
    console.log(outputMessage);
    return;
  }
}

function playGame() {
  //Play 5 rounds
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Type in 'rock', 'paper' or 'scissors'");
    playRound(playerInput, getComputerChoice());
  }
  computerScore > playerScore
    ? console.log("Better Luck Next time")
    : console.log("Congrats, you won");
}

playGame();
