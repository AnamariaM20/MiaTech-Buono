//77
/*
let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve("done"), 2000)
});
promise.then(() => alert('Viene eseguita dopo 2 secondi'));


//78
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 2000);
  });
  promise.catch(alert);


//79
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 2000);
  })
  .finally(() => alert("ferma l'indicatore di caricamento"))
  .catch(alert);
  
  */
