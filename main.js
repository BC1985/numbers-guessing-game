easyMode = () => {
  document.getElementById("easy-button").classList.toggle("active-button");
  document.getElementById("hard-button").classList.remove("active-button");
};

hardMode = () => {
  document.getElementById("hard-button").classList.toggle("active-button");
  document.getElementById("easy-button").classList.remove("active-button");
};
