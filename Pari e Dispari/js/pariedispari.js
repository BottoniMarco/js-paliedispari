// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

var pariDispari = prompt("pari o dispari?")
// inserimento numero da parte del utente
var numeroUtente = parseInt(prompt("scegli un numero tra 1 e 5 "));

// funzione random (1-5)
function random5() {
  return Math.floor(Math.random()*5)+1;
}

// evoco funzione random
var numeroRandom = random5();
console.log("numero" ,numeroRandom);

// funzione identificazione pari o dispari
function pariodis(num1,num2) {
  return (num1 + num2) % 2;
}

// evoco funzione di identificazione pari o dispari
var risultato = pariodis(numeroUtente,numeroRandom);
console.log("risultato", risultato);

if (pariDispari == "pari" && risultato == 0) {
  alert("hai vinto!");
}else if (pariDispari=="dispari" && risultato!=0) {
  alert("hai vinto!");
}
else {
  alert("hai perso!");
}
