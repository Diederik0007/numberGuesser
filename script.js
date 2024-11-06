let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return targetNumber =  (Math.floor(Math.random()*10));
  }

function compareGuesses() {
const targetNumber = generateTarget();
const humanDiff = Math.abs(4-targetNumber);
const compDiff = Math.abs(8-targetNumber);
if (humanDiff <= compDiff) {
        return true;
    return true;
} else {
    return false;
}
}

function updateScore() {
    if (compareGuesses() === true) {
      humanScore = humanScore+1;
      return 'human';
  
      console.log(humanScore);
      console.log(computerScore);
      console.log(currentRoundNumber);
    } else {
      computerScore = computerScore+1;
        return 'computer';
      console.log(humanScore);
      console.log(computerScore);
      console.log(currentRoundNumber);
    }
  }