class automobile {
    constructor(marca, modello, anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }
    
}


class elettrica extends automobile {
    constructor(marca, modello, anno,autonomia){
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }
    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}. The battery car lasts ${this.autonomia}`)
    }
    ricarica(autonomia){ 
        this.autonomia = this.autonomia + autonomia;
    }
}


let auto = new automobile("Ford", "Focus", 2016);
console.log(auto);
console.log(auto.marca);
auto.description();
let electricity = new elettrica("Ford", "Focus", 2016, 400);
console.log(electricity);
electricity.ricarica();