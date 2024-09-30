/*function somma (a,b) {
    let risultato = a + b
    //console.log(risultato) // in console vedo il risutatato da qua
    //alert(risultato) 
    return risultato
}
somma(4,5)
console.log(somma()) // perche mi dice NaN?
*/

function sum(valore){
    console.log(valore)
}

function calcolo(num1, num2, myCallback) {
    let ris = num1 + num2;
    myCallback(ris);
    console.log(ris)
  }

  calcolo(5, 5, sum);
  console.log(sum)
