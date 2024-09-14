class automobile {
    #contatoreChiamate;
    
    constructor(marca, modello, anno, km, contatoreChiamate){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
        this.#contatoreChiamate = 0;
        
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }

    #incrementaContatore(){ //come chiamo questo metodo privato?
        this.#contatoreChiamate++;
    };

    aggiungiChilometri(km) {
        return this.#incrementaContatore();
        this.km++
    }
}

let auto = new automobile("Ford", "Focus", 2016, 200000, 0);
console.log(auto);
console.log(auto.marca);
auto.description();
auto.contatoreChiamate = 1


auto.aggiungiChilometri(20)
auto.aggiungiChilometri()
console.log(auto.aggiungiChilometri())