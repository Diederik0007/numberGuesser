let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return (targetNumber = Math.floor(Math.random() * 10));
}

let winner = "";

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  const userDifference = Math.abs(humanGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);

  if (userDifference <= computerDifference) {
    winner = "human";
    return true; // Human wins or it's a tie
  } else {
    winner = "computer"
    return false; // Computer wins
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore +=1;
  } else if (winner === "computer") {
    computerScore +=1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

compareGuesses(4, generateTarget(), generateTarget());
updateScore(winner);
advanceRound();