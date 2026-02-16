// mi creo le variabili collegando con gli elemeti html 
const containerEl = document.getElementById('numbers-list')
const countdownEl = document.getElementById('countdown')


// mi creo il ciclo for per generare 5 numeri casuali da 1 a 15
for (let i = 0; i < 5; i++) {
    let numbers = Math.floor(Math.random() * 15) + 1;
    containerEl.innerHTML += '<li>' + numbers
}