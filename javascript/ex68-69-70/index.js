//68
/*
setTimeout(function(){
    alert("time out!!!")
}, 3000)
//69

setInterval(() => {
    console.log("il tempo non e passato ancora")
}, 2000);
*/
//70
//Prima ho provato di fare cosi, ma non andava, cosa non ho fatto bene?: 
setInterval(function timer() {
    console.log("il tempo non e passato ancora")
}, 1000,)

clearInterval(function timer() {
    console.log('stop')}, 5000)

//questa di giu sembra che funziona

let rangeTime = setInterval(() => console.log("il tempo non e passato ancora"), 1000);

setTimeout(() => {clearInterval(rangeTime); console.log('stop');}, 5000);
