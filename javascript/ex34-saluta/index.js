class Automobile {
    constructor(marca, modello, anno, km){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }
    aggiungiChilometri(km) {
        this.km = this.km + km;
    }//vivenono in 2 posti diversi;
    mostraChilometraggio() {
        return this.km;
    }
   /* saluta() {
        return `HELLO ${this.marca} ${this.modello} `
    }*/
    
}
//34
Automobile.prototype.saluta = function() { 
    return `Hello ${this.marca} ${this.modello}`}
/*
 



class elettrica extends automobile {
    constructor(marca, modello, anno, autonomia){
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }
    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}. The battery car lasts ${this.autonomia}`)
    }
    ricarica(autonomia){ 
        this.autonomia = this.autonomia + autonomia;
    }
}*/


let auto = new Automobile("Ford", "Focus", 2016, 10000);
console.log(auto);
console.log(auto.marca);
auto.description();
auto.saluta();
//34
console.log(auto.saluta())
//.prototype.saluta(auto);

//const automobile = new auto()
//automobile.introduce()    