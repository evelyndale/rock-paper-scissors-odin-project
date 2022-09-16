function getComputerChoice() {
  const selector = Math.floor(Math.random() * 3);
  if (selector === 0) {
    return "Rock";
  } else if (selector === 1) {
    return "Paper";
  } else if (selector === 2) {
    return "Scissors";
  } else {
    return "Error, selector returned " + selector;
  }
}

let computerSelection = getComputerChoice();

const playerInput = prompt("Enter your selection:");

console.log("Player selected " + playerInput);
console.log("computer selected " + computerSelection);

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "paper")
  ) {
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "player wins! 😁";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    return "computer wins! ☹";
  } else {
    return "error";
  }
}
