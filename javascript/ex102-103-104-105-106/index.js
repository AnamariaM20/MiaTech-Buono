//102 	Modifica il testo di un paragrafo
/*let text = document.querySelector(".para")

console.log(text)
text.innerText.innerHTML = "Ciao Mama"
console.log(text)
//103 	Cambia lo stile

function modificaStile() {
    let stile = document.querySelector("p");
    stile.style.backgroundColor = "green";
    stile.style.fontSize = "50px";
  }
*/
// 104 	Modifica l'html


function myFunction() {
  document.getElementById("demo").innerHTML = "I am red!";
}

//105 

    //let lista = document.createElement("ul")

//106
let myArrayItems = []
let listaSpesa = document.querySelector("#listaSpesa")

const btn = document.createElement("button")
btn.textContent = "Crea il tuo elenco per la spesa";
listaSpesa.append(btn);

const myItems = document.createElement("input")
myItems.setAttribute("type", "text");
listaSpesa.prepend(myItems);

let lista = document.createElement("ul")
listaSpesa.append(lista)

btn.addEventListener("click", addItem);

function addItem(){
    const newItem = myItems.value;
    myArrayItems.push(newItem);
    myArrayItems <= 5;
    adder(newItem)
    console.log(myArrayItems)
}
function adder(item){
    const li = document.createElement("li")
    li.textContent = item
    lista.append(li)
}

function build(){
    myArrayItems.forEach(ele => {
        adder(ele)
    })
}