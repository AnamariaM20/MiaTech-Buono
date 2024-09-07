let persone = '[{"nome":"Ana", "surrname":"Munteanu"}, {"nome":"Mary", "surrname":"Jakson"}, {"nome":"Bill", "surrname":"Gates"}]';
let person = JSON.parse(persone);
console.log(person)

let person2 = {nome:"Giacomo", surrname:"Moretti"};

person.push(person2);
console.log(person);

personeJson = JSON.stringify(person);