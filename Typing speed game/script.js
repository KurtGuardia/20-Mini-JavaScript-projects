//stuff from the DOM
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

//List of words form game
const words = [
  "kurt",
  "mari",
  "ludwig",
  "alba",
  "diego",
  "misti",
  "galicia",
  "compostela",
  "phi",
  "golden",
  "yisus",
  "cthulhu",
  "sagan",
  "sagitario A",
  "nebula",
  "galaxy",
  "soccer",
  "metallica",
  "slipknot",
  "quantum",
  "vlog",
  "dark",
  "community",
  "marcus aurelius",
  "seneca",
  "epictetus",
  "stoicism",
  "astrophysics",
  "cosmology",
  "quark",
  "bosson",
  "photon",
  "electron",
  "einstein",
  "newton",
  "feynman",
  "hawkings",
  "tesla",
];

//init word
let randomWord;

//init score
let score = 0;

//init time
let time = 10;

//Generate random word form array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDOM();

//Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//Event listeners
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    //clear
    e.target.value = "";
  }
});
