const userGuessLog = [];
let attempts = 0;
let maxGuesses = 10;
let computerGuess = Math.floor(Math.random() * 100 + 1);

easyMode = () => {
  document.getElementById("easy-button").classList.toggle("easy-button");
  document.getElementById("hard-button").classList.remove("hard-button");
};

hardMode = () => {
  document.getElementById("hard-button").classList.toggle("hard-button");
  document.getElementById("easy-button").classList.remove("easy-button");
};

newGame = () => {
  window.location.reload();
};

compareGuess = () => {
  let userGuess = document.getElementById("input-box").value;
  let attemptsOutput = document.getElementById("attempts");
  let textOutput = document.getElementById("text-output");
  let input = document.getElementById("input-box");
  let guessLogOutput = document.getElementById("guess-log");

  userGuessLog.push(userGuess);
  guessLogOutput.innerHTML = userGuessLog;
  attempts++;
  attemptsOutput.innerHTML = attempts;
  if (userGuessLog.length < maxGuesses) {
    if (userGuess < computerGuess) {
      textOutput.innerHTML = "Try a higher number.";
      input.value = "";
    } else if (userGuess > computerGuess) {
      textOutput.innerHTML = "Try a lower number.";
      input.value = "";
    } else {
      textOutput.innerHTML = "Correct!";
    }
  }
};
