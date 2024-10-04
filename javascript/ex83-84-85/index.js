//83 	

//Utilizzare Promise.all
//Creare due funzioni che restituiscano promesse che si risolvono dopo tempi diversi. Utilizzare Promise.all per eseguire entrambe le promesse in parallelo e stampare i risultati quando entrambe sono risolte.

/*let funct1 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(4), 1000); 
})

let funct2 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(10), 5000); 
})

Promise.all([funct1, funct2]).then((values) => {
  console.log(values);
});*/

//84 
// Utilizzare Promise.race
// Creare due funzioni che restituiscano promesse che si risolvono dopo tempi diversi. Utilizzare Promise.race per eseguire entrambe le promesse in parallelo e stampare il risultato della prima promessa che si risolve.

/*let funct1 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(4), 1000); 
})

let funct2 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(10), 5000); 
})

Promise.race([funct1, funct2]).then((values) => {
  console.log(values);
})*/

//85
/*	

Utilizzare Promise.allSettled
Creare tre funzioni che restituiscano promesse, due delle quali si risolvono e una viene rifiutata. Utilizzare Promise.allSettled per eseguire tutte le promesse in parallelo e stampare i risultati quando tutte sono state completate, indipendentemente dal fatto che siano state risolte o rifiutate.
*/

let promise1 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(4), 1000); 
})

let promise2 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(10), 5000); 
})

let promise3 = new Promise(function(resolve, reject) {

  setTimeout(() => reject(15), 5000); 
})

const promises = [promise1, promise2, promise3]

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

