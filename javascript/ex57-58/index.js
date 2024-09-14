//57
let arrayNumeri = [ 1, 5, 8, 10, 20];
let [puntegio1, puntegio2, ...arrayRest] = arrayNumeri;

console.log(puntegio1, puntegio2, arrayRest);
//non capisco quale e la diferenza tra questo es e il 49???

//58

let person = {
    name : "007",
    email: "ana@gmail.com",
    education: "informal",
}

let {name, email, ...rest} = person
console.log(name, email, rest)