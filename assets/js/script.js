/*
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input,
l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

console.log('its work');

//dichiaro le variabili per glie elementi html
const numberOneEl = document.getElementById('number-one');
const numberTwoEl = document.getElementById('number-two');
const numberThreeEl = document.getElementById('number-three');
const numberFourEl = document.getElementById('number-four');
const numberFiveEl = document.getElementById('number-five');
console.log(numberOneEl, numberTwoEl, numberThreeEl, numberFourEl, numberFiveEl);

//creo una funzione che mi genera dei numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//assegno la funzione ai miei elementi html
numberOneEl.innerHTML = getRndInteger(10, 100)
numberTwoEl.innerHTML = getRndInteger(10, 100)
numberThreeEl.innerHTML = getRndInteger(10, 100)
numberFourEl.innerHTML = getRndInteger(10, 100)
numberFiveEl.innerHTML = getRndInteger(10, 100)

//creo una funzione asincrona che sostituisce i numeri con degli input
setTimeout(() => {
    numberOneEl.innerHTML = '<input type="number" id="input-one">';
    numberTwoEl.innerHTML = '<input type="number" id="input-two">';
    numberThreeEl.innerHTML = '<input type="number" id="input-three">';
    numberFourEl.innerHTML = '<input type="number" id="input-four">';
    numberFiveEl.innerHTML = '<input type="number" id="input-five">';

}, 3000)
//verifico se i numeri inseriti dall'utente sono corretti 

