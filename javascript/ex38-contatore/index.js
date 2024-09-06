class automobile {
    #contatoreChiamate;
    constructor(marca, modello, anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }
   
}

let auto = new automobile("Ford", "Focus", 2016);
console.log(auto);
console.log(auto.marca);
auto.description();

