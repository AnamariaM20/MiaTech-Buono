// aggiungi propieta chilometraggio
// aggiungiChilometri - augmenta i chilometri
// mostraChilometri attuale; 
class Automobile {
    constructor(marca, modello, anno, km){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
    };

    description() {
        console.log(`I want to buy a car ${this.marca} ${this.modello} from ${this.anno}`)
    }
    aggiungiChilometri(km) {
        this.km = this.km + km;
    }//vivenono in 2 posti diversi;
    mostraChilometraggio() {
        return this.km;
    }
}

let auto = new Automobile("Ford", "Focus", 2016, 200000);
auto.aggiungiChilometri(10);
//devo mettere io i km che sono da aumentare;
console.log(auto) // adesso e aggiornato con i km;
console.log(mostraChilometraggio());

