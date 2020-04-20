//Select DOM elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

//Update Total and Count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const seatsIndex = [...selectedSeats].map((seat) =>
        [...seats].indexOf(seat) )    
        console.log(seatsIndex)
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


//Event listener movie select
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

//Event listener seat click event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')

        updateSelectedCount();
    }
})

