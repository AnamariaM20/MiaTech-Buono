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
    constructor(marca, modello, anno, autonomia){
        super(marca);
        super(modello);
        super(anno);
        this.autonomia = autonomia;
    }
    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}. The battery car lasts ${this.autonomia}`)
    }
    ricarica(km){ /// e buona questa funzione per ricarica???
        for(let i; i > this.autonomia;  i++){
            const autonomiaRicaricata = this.autonomia[i];
        }
    }
}


let auto = new automobile("Ford", "Focus", 2016);
console.log(auto);
console.log(auto.marca);
auto.description();

