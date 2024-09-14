class Automobile {
    #contatoreChiamate;

    constructor(marca, modello, anno, km, contatoreChiamate){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
        this.#contatoreChiamate = 0
    };
    #incrementaContatore(){ //come chiamo questo metodo privato?
        this.#contatoreChiamate++;
    }

    aggiungiChilometri(km) {
        this.km = this.km + km;
        this.#incrementaContatore();
    };

    monstraContatoreChiamate() {
        return this.#contatoreChiamate;
    }
}
let auto = new Automobile("Ford", "Focus", 2016, 20000 );
console.log(auto)

auto.aggiungiChilometri(200)
auto.aggiungiChilometri(300)
auto.aggiungiChilometri(300)
console.log(monstraContatoreChiamate())