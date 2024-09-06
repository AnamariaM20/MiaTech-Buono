class Automobile {
    constructor(marca, modello, anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    };
}

    class Camion extends Automobile {
        constructor(marca, modello, anno, maxCarico, pesoAtuale){
            super(marca, modello, anno);
            this.maxCarico = maxCarico;
            this.pesoAtuale = pesoAtuale;
        }
        description() {
            console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}. The wight doesn't have to overpass${this.carico}`)
        };
        carica(kg){
            if(kg + this.pesoAtuale < this.maxCarico) {
                return kg + this.pesoAtuale; // dove metto il peso atuale del camion?
            } else {
                return this.pesoAtuale;
            };
        };
    };




let auto = new Automobile("Ford", "Focus", 2016);
console.log(auto)


let truck = new Camion("Ford", "Focus", 2016, 2300, 1300);
console.log(truck);
console.log(truck.carica(1200));