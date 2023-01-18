const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  //Trim and change the player selection to lowercase
  playerSelection = playerSelection.trim().toLowerCase();
  computerSelection = computerSelection.trim().toLowerCase();
  let output;
  //If player selected rock
  if (playerSelection == "rock") {
    output =
      computerSelection == "rock"
        ? "That's a draw"
        : computerSelection == "paper"
        ? "Paper beats rock, you lose!"
        : "Rock beats scissors, You win you rock!";

    return output;
  } //If the player selects paper
  else if (playerSelection == "paper") {
    output =
      computerSelection == "rock"
        ? "You win. Paper beats rock"
        : computerSelection == "paper"
        ? "It's a draw"
        : "Scissors cut paper. you lose";

    return output;
  } //If the player selects scissors
  else if (playerSelection == "scissors") {
    output =
      computerSelection == "rock"
        ? "Rock beats scissors. You lose"
        : computerSelection == "paper"
        ? "Scissors beat paper. you win!"
        : "It's a draw!";

    return output;
  } else {
    return "No valid input";
  }
}

const playerSelection = "rock";
console.log(playRound(playerSelection, getComputerChoice()));
