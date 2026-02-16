// mi creo le variabili collegando con gli elemeti html 
const containerEl = document.getElementById('numbers-list')
const countdownEl = document.getElementById('countdown')
const formEl = document.getElementById('answers-form')
const messageEl = document.getElementById('message')

// mi creo un array dove salvare i numeri generati
let randomNumbers = [];

// mi creo il ciclo while per generare 5 numeri casuali da 1 a 50
while (randomNumbers.length < 5) {
    let number = Math.floor(Math.random() * 50) + 1;

    // aggiungo solo se non è già presente
    if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
        containerEl.innerHTML += '<li>' + number
    }
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


// scateno l'evento del submit al form 
formEl.addEventListener('submit', function (e) {
    e.preventDefault()

    // mi creo un array dove salvare i numeri inseriti dall'utente 
    const userNumbers = []

    // mi creo un array dove mettere solo i numeri corretti
    const correctNumbers = []

    // mi seleziono tutti gli input 
    const inputs = formEl.querySelectorAll('input');

    // salvo i numeri dentro il mio array 
    for (let i = 0; i < inputs.length; i++) {
        userNumbers.push(parseInt(inputs[i].value));
    }

    // effettuo il confronto tra i due array 
    for (let i = 0; i < userNumbers.length; i++) {

        if (randomNumbers.includes(userNumbers[i])) {
            correctNumbers.push(userNumbers[i]);
        }

    }


    // stampo il messaggio in pagina 
    messageEl.innerText =
        `Hai indovinato ${correctNumbers.length} numero/i: ${correctNumbers.join(', ')}`;

});
