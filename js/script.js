// mi creo le variabili collegando con gli elemeti html 
const containerEl = document.getElementById('numbers-list')
const countdownEl = document.getElementById('countdown')
const formEl = document.getElementById('answers-form')
const messageEl = document.getElementById('message') 

// mi creo un array dove salvare i numeri generati
let randomNumbers = [];

// mi creo il ciclo for per generare 5 numeri casuali da 1 a 50
for (let i = 0; i < 5; i++) {
    let numbers = Math.floor(Math.random() * 50) + 1;
    // salvo i numeri generati nell'array
    randomNumbers.push(number);
    containerEl.innerHTML += '<li>' + numbers
}


// countdown di 30 secondi per memorizzare i numeri 
let timer = 30;

countdownEl.innerText = timer;
console.log(timer)

// creo il countdown 
const interval = setInterval(function () {
    timer--
    countdownEl.innerText = timer;
    // SE il timer è uguale a 0 
    if (timer === 0) {
        clearInterval(interval)
        // nascone i numeri
        containerEl.classList.add('d-none');
        // fa comparire gli input dove inserire i numeri precedentemente memorizzati
        formEl.classList.remove('d-none');
        formEl.classList.add('d-block');
    }
    console.log(timer)
}, 1000); 
