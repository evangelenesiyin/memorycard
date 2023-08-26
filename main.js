const fruitsArray = [
  "assets/avocado.png",
  "assets/blueberry.png",
  "assets/coconut.png",
  "assets/kiwi.png",
  "assets/lemon.png",
  "assets/mango.png",
  "assets/orange.png",
  "assets/watermelon.png",
  "assets/avocado.png",
  "assets/blueberry.png",
  "assets/coconut.png",
  "assets/kiwi.png",
  "assets/lemon.png",
  "assets/mango.png",
  "assets/orange.png",
  "assets/watermelon.png",
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

function appendFruit(index) {
  const addFruit = document.createElement("img");
  addFruit.src = fruitsArray[index];
  addFruit.className = "fruits";
  addFruit.style.width = "45px";
  addFruit.style.height = "45px";
  return addFruit;
}

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    card[i].innerHTML = "";
    card[i].append(appendFruit(i));
  });
}
