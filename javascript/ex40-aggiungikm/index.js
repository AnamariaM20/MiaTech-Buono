class automobile {
    #contatoreChiamate;
    #incrementaContatore(){
        this.#contatoreChiamate++;
    };
    constructor(marca, modello, anno, contatoreChiamat){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.#contatoreChiamat = contatoreChiamate;
        
    };
    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }

    aggiungiChilometri() {
        return this.#incrementaContatore();
        };
    }

    mostraChilometraggio() {
        return this.km;
    }

    
   
}

let auto = new automobile("Ford", "Focus", 2016);
console.log(auto);
console.log(auto.marca);
auto.description();

