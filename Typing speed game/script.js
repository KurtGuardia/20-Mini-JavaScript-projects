//stuff from the DOM
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
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

//Set difficulty to value on LS or medium
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//Set difficulty select value
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//Focus on text
text.focus();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//Generate random word form array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

//Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    //end game
    gameOver();
  }
}

//Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `<h1>Time ran out!</h1>
    <h3>Your final score is ${score}</h3>
    <button onclick="location.reload()">Reload</button>`;

  endgameEl.style.display = "flex";
}

addWordToDOM();

//Event listeners

//Typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    //clear
    e.target.value = "";

    if (difficulty == "hard") {
      time += 3;
    } else if (difficulty === "medium") {
      time += 5;
    } else {
      time += 8;
    }

    updateTime();
  }
});

//settings btn click
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

//settings select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
