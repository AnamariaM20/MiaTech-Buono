class Automobile {
    #contatoreChiamate;

    #incrementaContatore(){
        this.#contatoreChiamate =+ 1; // praticamente come incremento il contatoreChiamate?
        return this.#contatoreChiamate;
    };

    constructor(marca, modello, anno, km){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
    };
    

    aggiungiChilometri() {
        return this.#incrementaContatore();
        };


    monstraContatoreChiamate() {
        count(this.aggiungiChilometri());
        return count();
    }
    get kms(){
        return this.km;
    }
    set (x){
        if(x >= this.km)  {
            this.km = x + this.km
        } else {
            this.km
        }

    }
}
let auto = new Automobile("Ford", "Focus", 2016, 200000);
console.log(auto)
console.log(auto.km)
auto.set(300);
console.log(auto.km)