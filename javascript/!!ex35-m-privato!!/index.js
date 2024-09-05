class automobile {
    constructor(marca, modello, anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }
    saluto() {
        return `HELLO ${this.marca} ${this.modello} `
    }
    #calcolaEta(){
        let date = new Date();
        let year = date.getFullYear();
        return year - this.anno;
    };

    monstaEta(){
        return this.#calcolaEta();
    }
    
}

let auto = new automobile("Ford", "Focus", 2016);
console.log(auto);
console.log(auto.marca);
auto.description();

console.log(auto.monstaEta()) // perche non mi prende l'anno?

