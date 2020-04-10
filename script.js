const container = document.getElementById('container');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');
let ticketprice = +movieselect.value;


movieselect.addEventListener('change', e=>{
    ticketprice= +e.target.value;
    updatecount();
})


//Update count
function updatecount(){
        let selectedseats= document.querySelectorAll('.row .seat.selected');
        let selectedseatscount = selectedseats.length;

        count.innerText = +selectedseatscount;
        total.innerText= selectedseatscount * ticketprice;
}

//Event listener
container.addEventListener( "click", e =>{
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
       e.target.classList.toggle('selected');
        updatecount();
   }
})