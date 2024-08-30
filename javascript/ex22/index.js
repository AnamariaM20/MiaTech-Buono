//es 22 Non Va; Sono riuscita di ottenere 10 a a un certo punto...

function outerfunction(x, pippo) {
        function innerFunction(y){
            return x + y;
        }
    return innerFunction(pippo);
}

let parametroX = 10;
let parametroY = 14;
console.log(outerfunction(parametroX, parametroY));