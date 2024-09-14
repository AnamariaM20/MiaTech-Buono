class Automobile {
    static km1 = 120000
    static km2 = 160000
    

    static confrontaChilometraggio(km1, km2){
        if(km1 >= km2){
        return km1
    } else {
        return km2
    };}
   
}
console.log(Automobile.confrontaChilometraggio(180000, 160000))

let autoKm = new Automobile (120000, 160000)
//console.log(autoKm.confrontaChilometraggio());

