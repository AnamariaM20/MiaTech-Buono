class automobile {
    #contatoreChiamate;
    
    constructor(marca, modello, anno, contatoreChiamat){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.#contatoreChiamate = 0;
        
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }

    #incrementaContatore(){
        this.#contatoreChiamate++;
    };

    aggiungiChilometri() {
        incrementaContatore();
    }

    mostraChilometraggio(){
        return this.km;
    }
   
}

let auto = new automobile("Ford", "Focus", 2016);
console.log(auto);
console.log(auto.marca);
auto.description();
auto.mostraChilometraggio()

 