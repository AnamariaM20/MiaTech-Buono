
function calcolo( elemento1, elemento2, func ){
    func(elemento1 + elemento2)
}
calcolo(14, 55, function(sum){
   document.write("sum: ", sum)

   // perche non funziona con consol log invece di document.write?
})



function calcolo ((func) => {
    func(elemento1 + elemento2)
    return func()
})
func(2, 4)
console.log(funct())


// non va
/*

function calcolo((func)=> {
    return func(elemento1 + elemento2)
})
let mio = func(14, 52);

// arrow fucntion is an call back?
*/