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

const mainMenu = document.querySelector(".mainmenu");
const normalButton = document.querySelector(".normal");
const hardButton = document.querySelector(".hard");
const normalMode = document.querySelector(".normaldeck");
const hardMode = document.querySelector(".harddeck");
const card = document.querySelectorAll(".frontview");

normalButton.addEventListener("click", startNormal);
hardButton.addEventListener("click", startHard);

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
  shuffleArray(fruitsArray);
}

// ================================================

// create image elements
function appendFruit(index) {
  const addFruit = document.createElement("img");
  addFruit.src = fruitsArray[index];
  addFruit.className = "fruits";
  addFruit.style.width = "45px";
  addFruit.style.height = "45px";
  return addFruit;
}

// empty array to store opened cards
let openCards = [];

// append image elements in each grid upon clicking
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function () {
    if (openCards.length < 2) {
      card[i].innerHTML = "";
      card[i].append(appendFruit(i));
      openCards.push(card[i]);
      compareCards();
    }
  });
}

// compare cards and flip back if unmatched
function compareCards() {
  if (openCards.length === 2) {
    if (
      openCards[0].querySelector("img").src !==
      openCards[1].querySelector("img").src
    ) {
      setTimeout(() => {
        openCards.forEach((openCard) => {
          openCard.innerHTML = "?";
        });
        openCards = [];
      }, 800);
    } else {
      // keep cards open if matched
      openCards = [];
    }
  }
}

// shuffle deck using reverse loop
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}
