//59
let casa = {
    camera1 : "jardino",
    camera2 : "cucina",
    camera3 : "bagno",
};

const casaJson = JSON.stringify(casa);
console.log(casaJson)

//60
let casaParse = JSON.parse(casaJson);
console.log(casaParse);