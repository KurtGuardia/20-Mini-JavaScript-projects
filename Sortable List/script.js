const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

//Store listitems
const listItems = [];

let dragStartIndex;

createList();

//Insert listitems into DOM
function createList() {
  [...richestPeople]
    .map((a = { value: a, sort: Math.random() }))
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class='draggable' draggable='true>
            <p clas='person-name>${person}</p>
            <i class='fas fa-grip-lines'></i>
        </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
