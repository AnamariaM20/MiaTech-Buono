//es 
let parole = []; // crea un array vuoto
for (i = 0; i < 5; i++) {
    parole.push(prompt("inserisce una parola")); // inserisce le parole tramite prompt e metergli dentro il array creato prima 
}
console.log(parole); //stampa il array popolato

for(let i = 0; i < parole.length; i++)  // la funzione verifica la lunghezza delle values dentro questo array 
  { if(parole[i].length % 2 === 1) { // gli stampa se la lunghezza a un numero dispari
   console.log(parole[i]) // qua vedo queste parole con la lunghezza dispari
  }
 }
