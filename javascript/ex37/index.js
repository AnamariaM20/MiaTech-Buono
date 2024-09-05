function confrontaChilometraggio(autoX, autoY){
    if(autoX >= autoY){
    return autoX
} else {
    return autoY
};}
    

let autoKm = confrontaChilometraggio(120000, 160000)
console.log(autoKm);