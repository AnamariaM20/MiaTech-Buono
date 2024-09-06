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
    set SetterKm (km){
        if(kmSet >= this.km)  {
            return kmSet +this.km
        } else {
            this.km
        }

    }
}
let auto = new Automobile("Ford", "Focus", 2016, 200000);
console.log(auto)
console.log(aggiungiChilometri(200))
