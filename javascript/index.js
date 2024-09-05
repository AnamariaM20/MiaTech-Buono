//es 1
let numero = 1;
console.log(numero);

const age = 30; 
console.log(age);

//es2 

let streetNumber = 5;
streetNumber = 10;
console.log(streetNumber);

//es3

let number = 3 
{
    let number = 5
    console.log(number)
}
console.log(number)

//es4
let outside = 12;
{
    let inside = 20
    console.log(outside);
    console.log(inside);
}
    //console.log(outside);
    //console.log(inside);

//es5
//cosa non va?
/*
let i = 2; 
for (; i <= 20; i++) {
    return i % 2 == 0
    console.log(i)
    invece di "i" se puo utilizaare il nome de la variabile?
    se io voglio fare una variabile con i numeri pari?
    cosa vuol dire  --- let result = "";
    quale e la differenza tra statment (pezzetti di codice che da soli functiona) e declaration( un pezzo di codice che diachiara le cose: function , variabile)? nel caso di for, tra le tonde  abbiamo una decalration?
    quando utilizziamo  for, while, do while?
    return interoppe tutto; di solito non si fa return dentro un ciclo 
}
*/ 

for (let i = 2; i <= 20; i++) {
    if( i % 2 == 0) {
        console.log(i)
    }
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i)
}

//i += 2 

for (let i = 20; i >=0; i -= 2) {
    console.log(i)
}

let nu = 20;

for (; nu >=0; nu -= 2) {
    console.log(nu)
}

//console.log(i)

//6
for (let i = 11; i >=0; i -= 2) {
    console.log(i)
}

//7

let word = prompt("impecable")
//8
//console.log(word.length)

let word1 = [3, 5, 6, 10]
console.log(word1.length)

let word2 = "Maria"
console.log(word2.length)

//9


//9
// push se usa con un array;Sempre;
let res = "";
do {res = prompt("insert a word that contains minimum 5 letters");
}
while (res.length < 5); //la conditione e true? il ciclo se ripete; la conditione e false? il ciclo non se ripete; *false fa uscire i clicli; 
//10

let books = 100;
if(books >= 5){
    console.log("la variabila e maggiore di 5")
} else {
    console.log("la variabila e minore di 5")
}

//es 11
//perche non mi riesce solo un risultato e mi riesce 2 risultati?
let score = 24;
if (score <= 100 && score >= 90) {
    console.log("voto ottimo")
} else if (score <= 89 && score >= 70) {
    console.log("voto buono");
} else if (score <= 69 && score >= 60) {
    console.log("voto suficiente")
} else (score <= 59 && score > 0); {
    console.log("voto insuficiente")
}










 











