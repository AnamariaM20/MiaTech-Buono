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

let auto = new automobile("Ford", "Focus", 2016);
console.log(auto);
auto.description();

//const automobile = new auto()
//automobile.introduce()
