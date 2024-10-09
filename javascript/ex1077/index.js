const nome = document.querySelector("#nome");
const password = document.querySelector("#password")
const foorm = document.querySelector("#form")
const errorElement = document.querySelector("#error")

console.log(foorm)

foorm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    console.log(name)
    const entries = Object.fromEntries(data.entries());
    console.table(entries)
    checkInputs()
})
function checkInputs(){
    const nomeValue = nome.value;
    const passwordValue = password.value;

    if (nomeValue && passwordValue == "" ){
        alert("you have to put a name here")        
    }
    if ( passwordValue == "" ){
        alert("you have to put a password here")        
    } 
    
}

    
