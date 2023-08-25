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
const normalMode = document.querySelector(".normal");
const card = document.querySelectorAll(".frontview");

normalMode.addEventListener("click", startNormal);
