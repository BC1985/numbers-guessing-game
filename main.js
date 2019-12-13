const userGuessLog = [];
let remainingAttempts = 10;
let maxGuesses = 10;
numberOfAttempts = 0;
let numberToGuess = Math.floor(Math.random() * 100 + 1);

const container = document.getElementById("container");
const attemptsOutput = document.getElementById("attempts");
const userInterface = document.getElementById("user-interface");
const attemptsCounter = document.getElementById("attempts-counter");
easyMode = () => {
  maxGuesses = 10;
  remainingAttempts = 10;
  attemptsOutput.innerHTML = remainingAttempts;
  document.getElementById("easy-button").classList.add("easy-button");
  document.getElementById("hard-button").classList.remove("hard-button");
};

hardMode = () => {
  maxGuesses = 5;
  remainingAttempts = 5;
  attemptsOutput.innerHTML = remainingAttempts;
  document.getElementById("hard-button").classList.add("hard-button");
  document.getElementById("easy-button").classList.remove("easy-button");
};

newGame = () => {
  window.location.reload();
};
endGame = () => {
  document.getElementById("new-game-button").style.display = "inline";
  document.getElementById("input-box").setAttribute("readOnly", true);
};

clearInput = () => {
  document.getElementById("input-box").value = "";
};
compareGuess = () => {
  numberOfAttempts++;
  const userWonMessage = `<h1>that is correct, oh wise one!</h1> <p>you guessed it in ${numberOfAttempts} ${determineIfSingularNoun()}. let us make merry and rejoice and may the halls of valhala forever echo thy name!</p>`;
  const userLostMessage = `<h1>You lose, puny mortal!</h1> <p>The correct number was ${numberToGuess}</p>`;
  // disable buttons when once input entered and game started
  document.getElementById("hard-button").disabled = true;
  document.getElementById("easy-button").disabled = true;
  let userGuess = document.getElementById("input-box").value;
  let textOutput = document.getElementById("text-output");
  let guessLogOutput = document.getElementById("guess-log");

  userGuessLog.push(`${userGuess} `);
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
      userInterface.innerHTML = userWonMessage;
      attemptsCounter.remove();
      container.className += " user-won";

      clearInput();
      endGame();
    }
  } else {
    // on the last guessing attempt if number is wrong
    if (userGuess > numberToGuess || userGuess < numberToGuess) {
      numberOfAttempts++;
      // display message
      userInterface.innerHTML = userLostMessage;
      // change style upon losing
      container.className += " user-lost";
      clearInput();
      endGame();
    } else {
      // Or if user is right
      container.className += " user-won";

      userInterface.innerHTML = userWonMessage;
      attemptsCounter.remove();
      clearInput();
      endGame();
    }
  }
};
// match feedback to number of guesses made
determineIfSingularNoun = () => {
  if (numberOfAttempts === 1) {
    return "attempt";
  } else {
    return "attempts";
  }
};
