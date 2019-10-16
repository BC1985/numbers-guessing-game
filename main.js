const userGuessLog = [];
let remainingAttempts = 10;
let maxGuesses = 10;
let numberToGuess = Math.floor(Math.random() * 100 + 1);

easyMode = () => {
  maxGuesses = 10;
  document.getElementById("easy-button").classList.toggle("easy-button");
  document.getElementById("hard-button").classList.remove("hard-button");
};

hardMode = () => {
  maxGuesses = 5;
  document.getElementById("hard-button").classList.toggle("hard-button");
  document.getElementById("easy-button").classList.remove("easy-button");
};

newGame = () => {
  window.location.reload();
};
endGame = () => {
  document.getElementById("new-game-button").style.display = "inline";
  document.getElementById("easy-button").style.display = "none";
  document.getElementById("hard-button").style.display = "none";
  document.getElementById("input-box").setAttribute("readOnly", true);
};

clearInput = () => {
  document.getElementById("input-box").value = "";
};
compareGuess = () => {
  let userGuess = document.getElementById("input-box").value;
  let attemptsOutput = document.getElementById("attempts");
  let textOutput = document.getElementById("text-output");
  let guessLogOutput = document.getElementById("guess-log");

  userGuessLog.push(userGuess);
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
      textOutput.innerHTML = `That is correct, oh wise one! You guessed it in ${attempts} attempts. Let us make merry and rejoice!`;
      endGame();
    }
  } else {
    // on the last guessing attempt
    if (userGuess > numberToGuess || userGuess < numberToGuess) {
      textOutput.innerHTML = `You lose, puny mortal! The correct number was ${numberToGuess}`;
      clearInput();
      endGame();
    } else {
      textOutput.innerHTML = `That is correct, oh wise one! You guessed it in ${attempts} attempts. Let us make merry and rejoice!`;
      endGame();
    }
  }
};
