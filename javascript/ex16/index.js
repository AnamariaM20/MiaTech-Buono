//es
/* 
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
*/
/*
ciclo for  - do while;
ce si Repete 
fino quando la lungezza a 5 caracter=
*/

let result = "";
let res = result.push(prompt("insert a word that contains maximum 5 letters"))
console.log(result)
do {
  result.length > 0; result.length++;
  break;
}
while (result[i].length == 5);
  
  console.log(result.length)
     