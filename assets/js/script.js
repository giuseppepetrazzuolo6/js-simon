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

//creo una funzione asincrona che sostituisce i numeri con degli input
//verifico se i numeri inseriti dall'utente sono corretti 

