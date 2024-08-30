//es21   
// for is per numeri , e questo for in e per strings?

let person = {
    name: "Ana",
    age: 30,
    citta: "Olbia",
    job: "dev",
 }

 for (const property in person) {
    console.log(`${property}: ${person[property]}`);
  }