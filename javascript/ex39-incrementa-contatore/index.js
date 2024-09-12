class automobile {
    #contatoreChiamate;
    constructor(marca, modello, anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.#contatoreChiamate = 0
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }
    incrementaContatore() {
        this.#contatoreChiamate++
        
    }
    returnIncrementaContatore() {
        return this.#contatoreChiamate
    }
   
}

let auto = new automobile("Ford", "Focus", 2016);
console.log(auto);
console.log(auto.marca);
auto.description();
auto.returnIncrementaContatore(1);
auto.returnIncrementaContatore(1);
auto.returnIncrementaContatore(1);
auto.returnIncrementaContatore(1);

