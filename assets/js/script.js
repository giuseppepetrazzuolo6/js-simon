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

//creo delle variabili a cui assegnare la mia funzione getRndInteger
const numberOne = getRndInteger(10, 100)
const numberTwo = getRndInteger(10, 100)
const numberThree = getRndInteger(10, 100)
const numberFour = getRndInteger(10, 100)
const numberFive = getRndInteger(10, 100)

//assegno le varibili con il numero random ai miei elementi html
numberOneEl.innerHTML = numberOne
numberTwoEl.innerHTML = numberTwo
numberThreeEl.innerHTML = numberThree
numberFourEl.innerHTML = numberFour
numberFiveEl.innerHTML = numberFive

//creo una funzione asincrona che sostituisce i numeri con degli input
setTimeout(() => {
    numberOneEl.innerHTML = '<input type="number" id="input-one">';
    numberTwoEl.innerHTML = '<input type="number" id="input-two">';
    numberThreeEl.innerHTML = '<input type="number" id="input-three">';
    numberFourEl.innerHTML = '<input type="number" id="input-four">';
    numberFiveEl.innerHTML = '<input type="number" id="input-five">';

    //aggiungo il bottone
    const button = document.createElement('button')
    button.textContent = 'Verifica'
    document.body.appendChild(button)

    //aggiungo un evento al bottone
    button.addEventListener('click', () => {
        const inputOne = parseInt(document.getElementById('input-one').value);
        const inputTwo = parseInt(document.getElementById('input-two').value);
        const inputThree = parseInt(document.getElementById('input-three').value);
        const inputFour = parseInt(document.getElementById('input-four').value);
        const inputFive = parseInt(document.getElementById('input-five').value);
        //creo due array con gli input e i numeri random:
        //array input
        const userNumbers = [inputOne, inputTwo, inputThree, inputFour, inputFive];
        //array numeri random
        const originalNumbers = [numberOne, numberTwo, numberThree, numberFour, numberFive];
        //gli array mi serviranno per la verifica dei numeri indovinati
        //creo un array vuoto in cui andro ad inserire i numeri indovinati dall'utente
        const correctNumbers = []
        //ora creo un ciclo for che scorre i numeri inseriti dall'utente
        //verifica se sono presenti nell'array dei random number
        //li inserisce nei correct numbers
    })


}, 3000)
//verifico se i numeri inseriti dall'utente sono corretti 

