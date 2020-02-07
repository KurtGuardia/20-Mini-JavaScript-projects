//DOM Stuff
const cardContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const next = document.getElementById("next");
const currentEl = document.getElementById("current");
const show = document.getElementById("show");
const hideBtn = document.getElementById("hide");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("clear");
const addContainer = document.getElementById("add-container");

//Keep track of current card
let currentActiveCard = 0;

//Store DOM cards
const cardsEl = [];

//Store card data
let cardsData = [
  {
    question: "How old is the universe?",
    answer: "13 800 000 000 years old",
  },
  {
    question: "What is the temperature of the sun's core?",
    answer: "15 000 000 of Kelvin degrees",
  },
  {
    question: "What are protons made of?",
    answer: "Two Up Quarks and one Down Quark",
  },
];

//Create cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

//Create single card in the DOM
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
            <p>
            ${data.question}
            </p>
        </div>
        <div class="inner-card-back">
            <p>
            ${data.answer}
            </p>
        </div>
    </div>
  `;

  card.addEventListener("click", () => card.classList.toggle("show-answer"));

  //Add to DOM cards
  cardsEl.push(card);

  cardContainer.appendChild(card);

  updateCurrentText();
}

//Show number of cards
function updateCurrentText(){
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();
