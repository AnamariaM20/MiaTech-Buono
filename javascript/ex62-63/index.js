//62
let nome = "Angelina";
let surname = "Jolie";

let fullName = ` I am the famous ${nome} ${surname}`;
console.log(fullName);

//63

let eta = 27;
let citta = "Obia";
let description = `Sono ${nome} + ${surname}.\n Ho ${eta} anni e vivo a ${citta}`
console.log(description);

function tepmlateLiterals(nome, surname, eta, citta) {
    return`Sono ${nome} ${surname}.\n Ho ${eta} anni e vivo a ${citta}`
}