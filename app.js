//prompt player for input and convert to lowercase
const playerInputRaw = prompt("Enter your selection:");
const playerSelection = playerInputRaw.toLowerCase();

// assign output of computerChoice function to variable
let computerSelection = getComputerChoice();

//testing that player and computer selections have been made
console.log("Player selected " + playerSelection);
console.log("computer selected " + computerSelection);

//print the result of the game
let result = playRound(playerSelection, computerSelection);
console.log(result);

function getComputerChoice() {
  const selector = Math.floor(Math.random() * 3);
  if (selector === 0) {
    return "rock";
  } else if (selector === 1) {
    return "paper";
  } else if (selector === 2) {
    return "scissors";
  } else {
    return "Error, selector returned " + selector;
  }
}

function playRound(playerSelection, computerSelection) {
  console.log(
    "player selected " +
      playerSelection +
      " and computer selected " +
      computerSelection
  );
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
    return "error: could not compute winner. something aint right with function playRound";
  }
}
