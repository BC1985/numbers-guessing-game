"use strict";
const userGuessLog = [];
let remainingAttempts = 10;
let maxGuesses = 10;
let numberOfAttempts = 0;
let numberToGuess = Math.floor(Math.random() * 100 + 1);

const container = document.getElementById("container");
const attemptsOutput = document.getElementById("attempts");
const userInterface = document.getElementById("user-interface");
const attemptsCounter = document.getElementById("attempts-counter");
const easyMode = () => {
  maxGuesses = 10;
  remainingAttempts = 10;
  attemptsOutput.innerHTML = remainingAttempts;
  document.getElementById("easy-button").classList.add("easy-button");
  document.getElementById("hard-button").classList.remove("hard-button");
};

const hardMode = () => {
  maxGuesses = 5;
  remainingAttempts = 5;
  attemptsOutput.innerHTML = remainingAttempts;
  document.getElementById("hard-button").classList.add("hard-button");
  document.getElementById("easy-button").classList.remove("easy-button");
};

const newGame = () => {
  window.location.reload();
};
const endGame = () => {
  let textOutput = document.getElementById("text-output");
  textOutput.innerHTML = "";
  document.getElementById("new-game-button").style.display = "inline";
  document.getElementById("input-box").setAttribute("readOnly", true);
};

const clearInput = () => {
  document.getElementById("input-box").value = "";
};
const compareGuess = () => {
  // disable buttons when once input entered and game started
  document.getElementById("hard-button").disabled = true;
  document.getElementById("easy-button").disabled = true;
  let userGuess = document.getElementById("input-box").value;
  let textOutput = document.getElementById("text-output");
  let guessLogOutput = document.getElementById("guess-log");
  // validate input to make sure it's only numbers in range
  if (userGuess == 0 || userGuess > 100) {
    textOutput.innerHTML = "Please enter number between 1 and 100";
    clearInput();
    return false;
  }
  numberOfAttempts++;
  userGuessLog.push(` ${userGuess}`);
  // display entered guesses
  guessLogOutput.innerHTML = userGuessLog;
  remainingAttempts--;
  attemptsOutput.innerHTML = remainingAttempts;
  //   before you hit the maximum number of guesses
  if (userGuessLog.length < maxGuesses) {
    if (userGuess < numberToGuess) {
      textOutput.innerHTML = "Try a higher number.";
      clearInput();
    } else if (userGuess > numberToGuess) {
      textOutput.innerHTML = "Try a lower number.";
      clearInput();
    } else {
      displayUserWinningOutput();
    }
  } else {
    // on the last guessing attempt if number is wrong
    if (userGuess > numberToGuess || userGuess < numberToGuess) {
      numberOfAttempts++;
      displayUserLosingOutput();
    } else {
      // Or if user is right
      displayUserWinningOutput();
    }
  }
};
// match feedback to number of guesses made
const determineIfSingularNoun = () => {
  if (numberOfAttempts === 1) {
    return "attempt";
  } else {
    return "attempts";
  }
};

const displayUserWinningOutput = () => {
  const userWonMessage = `<h1>That is correct, oh wise one!</h1> <h2>You guessed it in ${numberOfAttempts} ${determineIfSingularNoun()}. Let us make merry and rejoice, and may the halls of Valhalla forever echo thy name!</h2>`;
  userInterface.innerHTML = userWonMessage;
  attemptsCounter.remove();
  clearInput();
  endGame();
};

const displayUserLosingOutput = () => {
  const userLostMessage = `<h1>You lose, puny mortal!</h1> <h2>The correct number was ${numberToGuess}. Are you foolish enough to challenge me again?</h2>`;
  // display message
  userInterface.innerHTML = userLostMessage;
  // change style upon losing
  container.className += " user-lost";
  clearInput();
  endGame();
};
function validateInput() {
  let textOutput = document.getElementById("text-output");
  let number = document.getElementById("input-box").value;
  if (isNaN(number) || number === 0 || number > 100) {
    textOutput.innerHTML = "Please enter only numbers between 1 and 100";
    return false;
  }
}
