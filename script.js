let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (Math.abs(targetNumber - humanGuess) <= Math.abs(targetNumber - computerGuess)) {
        return true;
    } else {
        return false;
    };
};

const updateScore = winner => {
    if (compareGuess = true) {
        humanScore++;
    } else {
        computerScore++;
    };
};

const advanceRound = () => currentRoundNumber++;
