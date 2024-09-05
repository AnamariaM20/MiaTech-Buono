class automobile {
    constructor(marca, modello, anno, km){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }
    saluto() {
        return `HELLO ${this.marca} ${this.modello} `
    }
    #calcolaEta(){
        return getFullYear() - this.anno;
        

    }
    monstaEta(){
        return this.#calcolaEta
    }
    _controllaChilometri(){
        if (this.km > 100.000) {
            alert("you have  to stop the car")
        }
    }
    
}

let auto = new automobile("Ford", "Focus", 2016, 160.000);
console.log(auto);
console.log(auto.marca);
auto.description();
console.log(auto.monstaEta()) // perche non mi prende l'anno?



console.log(auto._controllaChilometri())
let showKm = _controllaChilometri(km);

//comer posso verificare le funzione?
