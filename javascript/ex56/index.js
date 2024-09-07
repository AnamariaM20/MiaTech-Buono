/*function restOperator(acceta un numero variabili di argomenti){
    return suma di tuti numeri variabili di argomenti
}
    */

function calcola(...items){
    let sum = 0;
    for( let item of items){sum += item;}
    return  sum;
}
let numeri = [3, 5, 7, 10, 12, 14]
console.log(calcola(...numeri))