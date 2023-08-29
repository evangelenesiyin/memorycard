let fruitsArray = [
  "assets/avocado.png",
  "assets/blueberry.png",
  "assets/coconut.png",
  "assets/kiwi.png",
  "assets/lemon.png",
  "assets/mango.png",
  "assets/orange.png",
  "assets/watermelon.png",
];

let newFruits = [
  "assets/tomato.png",
  "assets/cherry.png",
  "assets/melon.png",
  "assets/pear.png",
  "assets/peach.png",
  "assets/redapple.png",
  "assets/greenapple.png",
];

let hardFruitsArray = [...fruitsArray];
hardFruitsArray.push(...newFruits);

const mainMenu = document.querySelector(".mainmenu");
const normalButton = document.querySelector(".normal");
const hardButton = document.querySelector(".hard");
const normalMode = document.querySelector(".normaldeck");
const hardMode = document.querySelector(".harddeck");
const normalCard = document.querySelectorAll(".normalCard");
const hardCard = document.querySelectorAll(".hardCard");
const successNormal = document.querySelector(".successNormal");
const successHard = document.querySelector(".successHard");
const nextLevel = document.querySelector(".next");
const backMainMenu = document.querySelector(".back");

normalButton.addEventListener("click", startNormal);
hardButton.addEventListener("click", startHard);
nextLevel.addEventListener("click", proceedHard);
backMainMenu.addEventListener("click", backToMenu);

// ================================================

// starts normal mode - duplicates the array of existing cards and shuffles the deck
function startNormal() {
  normalMode.classList.remove("none");
  mainMenu.classList.add("none");
  normalDeck(fruitsArray);
  shuffleArray(fruitsArray);
}

// duplicating elements in fruitsArray to fit 4 x 4 grid
function normalDeck() {
  fruitsArray = fruitsArray.concat(fruitsArray);
  return fruitsArray;
}

// ================================================

// starts hard mode
function startHard() {
  hardMode.classList.remove("none");
  mainMenu.style.display = "none";
  hardDeck(hardFruitsArray);
  shuffleArray(hardFruitsArray);
}

// duplicating elements in hardFruitsArray to fit 5 x 6 grid
function hardDeck() {
  hardFruitsArray = hardFruitsArray.concat(hardFruitsArray);
  return hardFruitsArray;
}

// ================================================

function proceedHard() {
  successNormal.classList.add("none");
  hardMode.classList.remove("none");
  hardDeck(hardFruitsArray);
  shuffleArray(hardFruitsArray);
}

function backToMenu() {
  successNormal.classList.add("none");
  mainMenu.classList.remove("none");
}

// ================================================

// create image elements for normal mode
function appendFruit(index) {
  const addFruit = document.createElement("img");
  addFruit.src = fruitsArray[index];
  addFruit.style.width = "45px";
  addFruit.style.height = "45px";
  return addFruit;
}

// create image elements for hard mode
function appendFruitHard(index) {
  const addFruit1 = document.createElement("img");
  addFruit1.src = hardFruitsArray[index];
  addFruit1.style.width = "35px";
  addFruit1.style.height = "35px";
  return addFruit1;
}

// shuffle deck using reverse loop
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}

// empty array to store opened cards
let compareCards = [];
let compareHardCards = [];
let openCards = [];
let openHardCards = [];

// append image elements in each grid upon clicking - normal mode
for (let i = 0; i < normalCard.length; i++) {
  const clickedCard = normalCard[i];
  clickedCard.addEventListener("click", function (event) {
    // checks if clicked card has already been matched and open
    if (clickedCard.classList.contains("open")) {
      event.preventDefault();
      return;
    }
    if (compareCards.length < 2) {
      clickedCard.innerHTML = "";
      clickedCard.append(appendFruit(i));
      compareCards.push(clickedCard);
      compareNormal();
    }
  });
}

// append image elements in each grid upon clicking - hard mode
for (let i = 0; i < hardCard.length; i++) {
  const clickedHardCard = hardCard[i];
  clickedHardCard.addEventListener("click", function (event) {
    if (clickedHardCard.classList.contains("openHard")) {
      event.preventDefault();
      return;
    }
    if (compareHardCards.length < 2) {
      clickedHardCard.innerHTML = "";
      clickedHardCard.append(appendFruitHard(i));
      compareHardCards.push(clickedHardCard);
      compareHard();
    }
  });
}

// compare cards and flip back if unmatched - normal mode
function compareNormal() {
  if (compareCards.length === 2) {
    if (
      compareCards[0].querySelector("img").src !==
      compareCards[1].querySelector("img").src
    ) {
      setTimeout(() => {
        compareCards.forEach((openCard) => {
          openCard.innerHTML = "?";
        });
        compareCards = [];
      }, 1000);
    } else {
      // for every pair matched, check duplicates against the elements in openCards array and push it in
      if (!openCards.includes(compareCards[0])) {
        compareCards[0].classList.add("open");
        openCards.push(compareCards[0]);
      }
      if (!openCards.includes(compareCards[1])) {
        compareCards[1].classList.add("open");
        openCards.push(compareCards[1]);
      }
      // keep cards open if matched
      compareCards = [];
      // show successNormal page if all cards are opened
      if (openCards.length === 16) {
        completeNormalLevel();
      }
    }
  }
}

// compare cards and flip back if unmatched - hard mode
function compareHard() {
  if (compareHardCards.length === 2) {
    if (
      compareHardCards[0].querySelector("img").src !==
      compareHardCards[1].querySelector("img").src
    ) {
      setTimeout(() => {
        compareHardCards.forEach((openHardCard) => {
          openHardCard.innerHTML = "?";
        });
        compareHardCards = [];
      }, 1000);
    } else {
      // for every pair matched, check duplicates against the elements in openHardCards array and push it in
      if (!openHardCards.includes(compareHardCards[0])) {
        compareHardCards[0].classList.add("openHard");
        openHardCards.push(compareHardCards[0]);
      }
      if (!openHardCards.includes(compareHardCards[1])) {
        compareHardCards[1].classList.add("openHard");
        openHardCards.push(compareHardCards[1]);
      }
      // keep cards open if matched
      compareHardCards = [];
      // show successNormal page if all cards are opened
      if (openHardCards.length === 30) {
        completeHardLevel();
      }
    }
  }
}

// triggers when player completes normal mode
function completeNormalLevel() {
  normalMode.classList.add("none");
  successNormal.classList.remove("none");
}
// triggers when player completes hard mode
function completeHardLevel() {
  hardMode.classList.add("none");
  successHard.classList.remove("none");
}
