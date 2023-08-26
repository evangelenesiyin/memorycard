const fruits = [
  "avocado.png",
  "blueberry.png",
  "coconut.png",
  "kiwi.png",
  "lemon.png",
  "mango.png",
  "orange.png",
  "watermelon.png",
];

let matchedCards = 0;

const mainMenu = document.querySelector(".mainmenu");
const normalButton = document.querySelector(".normal");
const hardButton = document.querySelector(".hard");
const normalMode = document.querySelector(".normaldeck");
const hardMode = document.querySelector(".harddeck");
const card = document.querySelectorAll(".frontview");

normalButton.addEventListener("click", startNormal);
hardButton.addEventListener("click", startHard);

function startNormal() {
  normalMode.classList.remove("none");
  mainMenu.style.display = "none";
}

function startHard() {
  hardMode.classList.remove("none");
  mainMenu.style.display = "none";
}
