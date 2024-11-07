let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
console.log(humanScore);
console.log(computerScore);
console.log(currentRoundNumber);

function generateTarget() {
  return targetNumber =  (Math.floor(Math.random()*10));
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
  const userDifference = Math.abs(userGuess - targetNumber);
  const computerDifference = Math.abs(computerGuess - targetNumber);

  if (userDifference <= computerDifference) {
    return true; // Human wins or it's a tie
  } else {
    return false; // Computer wins
  }
}