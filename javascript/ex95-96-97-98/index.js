//95 cookies
/*function setCookie(name, value){
  const d = new Date();
  d.setTime(d.getTime() +24*60*60*1000)
  let expires = "expires =" + d.toUTCString();
  document.cookie = name + "=" + value +";" + expires + "; path=/";
}

setCookie("ana", "socialMedia");
console.log("Cookies:" , document.cookie)
*/

//96 LocalStorage

let setButton = document.getElementById("set-button")
let setPizza = document.getElementById("pizza");

const pizzaName = localStorage.getItem/*only the key*/("my_preferred_pizza") || "";
setPizza.innerText = pizzaName;

setButton.addEventListener("click", function(){
  const pizzaName = prompt("which is your preferred pizza?", "Pizza");
  localStorage.setItem("my_preferred_pizza" /*is the key*/, pizzaName/*is the value*/);
  setPizza.innerText = pizzaName
  setPizza = "";
})

//97 sessionSession
/*
let setButton = document.getElementById("set-button")
let setPizza = document.getElementById("pizza");

const pizzaName = sessionStorage.getItem("my_preferred_pizza") || "";
setPizza.innerText = pizzaName;

setButton.addEventListener("click", function(){
  const pizzaName = prompt("which is your preferred pizza?", "Pizza");
  sessionStorage.setItem("my_preferred_pizza" , pizzaName);
  setPizza.innerText = pizzaName
  setPizza = "";
})*/

//98

function sessionLocalStorage(key, value) {

  localStorage.setItem(key, value);
  console.log(`The value is save in sessionStorage: ${key} = ${value}`);

  sessionStorage.setItem(key, value);
  console.log(`The value is save in sessionStorage: ${key} = ${value}`);
}

function recuperaValori(chiave) {

  let valoreLocalStorage = localStorage.getItem(key);
  if (valoreLocalStorage) {
    console.log(`The value is save in sessionStorage:: ${key} = ${valoreLocalStorage}`);
  } else {
    console.log(`The value isn't saved in localStorage for the key: ${key}`);
  }
  let valoreSessionStorage = sessionStorage.getItem(key);
  if (valoreSessionStorage) {
    console.log(`The value is caught by sessionStorage: ${key} = ${valoreSessionStorage}`);
  } else {
    console.log(`he value isn't saved in sessionStorage for the key: ${key}`);
  }
}

function rimuoviValori(key) {

  localStorage.removeItem(key);
  console.log(`the value is remouved in localStorage: ${key}`);

  sessionStorage.removeItem(key);
  console.log(`the value is remouved in : ${key}`);
}

