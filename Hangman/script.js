// Take stuff from the DOM
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "compostela",
  "cthulhu",
  "spacex",
  "astrophysics",
  "phi",
  "maria",
  "kurt",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden word
function displayWord() {
  wordEl.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) => `
    <span class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
    </span>
        `
    )
    .join("")}
`;

  const innerWord = word.innerHTML.replace(/\n/g, ""); //to avoid the new line after every letter

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congrats";
    popup.style.display = "flex";
  }
}

displayWord();
