// 75
//care e diferenta dintre 74 si 75?
/*
(func) => {
    func(elemento1 + elemento2)
    return func()
}
func(2, 4)
console.log(func()) */

//76
function sayHi(fName, lName){
    function getFname() {
        let wish = "Hello";
        return wish + " " + fName + " " + lName;
    }
    return getFname()
    console.log(getFname())
}



let message = sayHi("Ana", "Maria")
alert(message)