//es 22 Non Va; Sono riuscita di ottenere 10 a a un certo punto...
//non si reasegna le parametri di una funzione;

function outerfunction(x, initialValue) {
    let result = initialValue;
        function innerFunction(y){
            result = x + y;
            console.log(result)
        }
    return innerFunction(initialValue);
}
let parametro1 = 10;
let parametro2 = 11;
console.log(outerfunction(parametro1, parametro2));

//  riga 14 esegue la funzione della riga 4; 
//riga 10 esegue la funzione della  riga 6;
// giu alla riga 12 e 13 dichiariamo i parametri che gli utilizziamo dentro le funzioni che le eseguiamo; 
// gli parametri dalla riga 4 sono le stessi parametri che sono detro la riga 14, come si vede; 

//y prende un altro parametro alla 10, cioe y diventa initial value cio'e result cioe x+y