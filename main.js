const userGuessLog = [];
let attempts = 0;

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
  userGuessLog.push(userGuess);
  document.getElementById("guess-log").innerHTML = userGuessLog;
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;
};
