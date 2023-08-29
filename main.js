let fruitsArray = [
  "public/assets/avocado.png",
  "public/assets/blueberry.png",
  "public/assets/coconut.png",
  "public/assets/kiwi.png",
  "public/assets/lemon.png",
  "public/assets/mango.png",
  "public/assets/orange.png",
  "public/assets/watermelon.png",
];

let hardFruitsArray = [
  "public/assets/avocado.png",
  "public/assets/blueberry.png",
  "public/assets/coconut.png",
  "public/assets/kiwi.png",
  "public/assets/lemon.png",
  "public/assets/mango.png",
  "public/assets/orange.png",
  "public/assets/watermelon.png",
  "public/assets/tomato.png",
  "public/assets/cherry.png",
  "public/assets/melon.png",
  "public/assets/pear.png",
  "public/assets/peach.png",
  "public/assets/redapple.png",
  "public/assets/greenapple.png",
];

const mainMenu = document.querySelector(".mainmenu");
const normalButton = document.querySelector(".normal");
const hardButton = document.querySelector(".hard");
const normalMode = document.querySelector(".normaldeck");
const hardMode = document.querySelector(".harddeck");
const normalCard = document.querySelectorAll(".normalCard");
const hardCard = document.querySelectorAll(".hardCard");
const success = document.querySelector(".success");
const nextLevel = document.querySelector(".next");

normalButton.addEventListener("click", startNormal);
hardButton.addEventListener("click", startHard);
nextLevel.addEventListener("click", proceedHard);

// ================================================

// starts normal mode - duplicates the array of existing cards and shuffles the deck
function startNormal() {
  normalMode.classList.remove("none");
  mainMenu.style.display = "none";
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

function hardDeck() {
  hardFruitsArray = hardFruitsArray.concat(hardFruitsArray);
  return hardFruitsArray;
}

// ================================================

function proceedHard() {
  success.classList.add("none");
  hardMode.classList.remove("none");
  hardDeck(hardFruitsArray);
  shuffleArray(hardFruitsArray);
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
let openCards = [];
let openHardCards = [];

// append image elements in each grid upon clicking - normal mode
for (let i = 0; i < normalCard.length; i++) {
  const clickedCard = normalCard[i];
  clickedCard.addEventListener("click", function () {
    if (compareCards.length < 2) {
      clickedCard.innerHTML = "";
      clickedCard.append(appendFruit(i));
      clickedCard.classList.add("opencard");
      compareCards.push(clickedCard);
      compareNormalCards();
    }
  });
}

// append image elements in each grid upon clicking - hard mode
for (let i = 0; i < hardCard.length; i++) {
  hardCard[i].addEventListener("click", function () {
    const clickedHardCard = hardCard[i];
    if (openHardCards.length < 2) {
      clickedHardCard.innerHTML = "";
      clickedHardCard.append(appendFruitHard(i));
      openHardCards.push(clickedHardCard);
      compareHardCards();
    }
  });
}

// compare cards and flip back if unmatched - normal mode
function compareNormalCards() {
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
        console.log("cards not the same, close back");
      }, 1000);
    } else {
      // check duplicates and push into openCards array
      if (!openCards.includes(compareCards[0])) {
        openCards.push(compareCards[0]);
      }
      if (!openCards.includes(compareCards[1])) {
        openCards.push(compareCards[1]);
      }
      // keep cards open if matched
      compareCards = [];
      if (openCards.length === 16) {
        completeLevel();
      }
      console.log("keep open if same");
    }
  }
}

// compare cards and flip back if unmatched - hard mode
function compareHardCards() {
  if (openHardCards.length === 2) {
    if (
      openHardCards[0].querySelector("img").src !==
      openHardCards[1].querySelector("img").src
    ) {
      setTimeout(() => {
        openHardCards.forEach((openHardCard) => {
          openHardCard.innerHTML = "?";
        });
        openHardCards = [];
        console.log("cards not the same, close back");
      }, 1000);
    } else {
      // keep cards open if matched
      openHardCards = [];
      console.log("keep open if same");
    }
  }
}

// triggers when player completes normal mode
function completeLevel() {
  normalMode.classList.add("none");
  success.classList.remove("none");
}
