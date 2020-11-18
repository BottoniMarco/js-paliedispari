// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// inserimento parola utente
var parola = prompt("inserisci una parola");

// parola utente al contrario
var risultato = ""

// lunghezza parola utente
var i = parola.length;

// variabile contatore
var j = 0;

// con un ciclo while ricompongo la parola al contrario
while(j != parola.length){
  risultato += parola[i-1];
  i--;
  j++;
}

console.log(risultato);

// se la parola al contrario è uguale a quella inserita allora è palindroma
if (risultato == parola) {
  console.log("la parola è palindroma");
}else {
  console.log("la parola NON è palindroma");
}
