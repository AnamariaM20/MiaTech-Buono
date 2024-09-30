/*//71

try {
   
    if (10 / 9 == 0) {
        console.log("errore generico")} 
} catch (error){
    console.error("e un errore generico")
}

*/
// 72

function trycatch (){
console.log("start")

    try {
    console.log(medium) 
    } catch (error) {
        console.error("it is a problem" + error.message)
    }

console.log("finish");
}
trycatch() 