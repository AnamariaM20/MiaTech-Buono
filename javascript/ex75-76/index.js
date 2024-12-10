// 75
//care e diferenta dintre 74 si 75?
/*
(func) => {
    func(elemento1 + elemento2)
    return func()
}
func(2, 4)
console.log(func()) */
function firstvalue(a, b, callback){
    callback(a + b)
}

firstvalue(20, 40, function(c){
    console.log(c)
})

//76
function sayHi(fName, lName){
    function getFname() {
        let wish = "Hello";
        return wish + " " + fName + " " + lName;
    }
    return getFname()
}
let message = sayHi("Ana", "Maria")
alert(message)





function functionA(callback) {
    setTimeout(function() {
        console.log("Prima  callback");
        callback();
    }, 5000);
}

function functionB() {
    console.log("Callback  funzione");
}

functionA(functionB);