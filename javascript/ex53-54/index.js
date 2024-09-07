//53
let arrayOriginale = [20, 22, 24, 26, 29, 30];

let arrayCopia = [ ...arrayOriginale];
arrayOriginale = [3, 4, 5];

console.log(arrayOriginale);
console.log(arrayCopia)

//54
let arrayOriginale2 = [6, 7, 8];

let arrayOriginaleUnito = [ ...arrayOriginale, ...arrayOriginale2];
console.log(arrayOriginaleUnito);
