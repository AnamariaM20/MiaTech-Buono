let persona = {
    nome : "Angelina",
    surname : "Jolie",
    eta : 27,
    citta : "Obia",
}



function object(persona) {
    return`Sono ${persona.nome} ${persona.surname}.\n Ho ${persona.eta} anni e vivo a ${persona.citta}`
}
console.log(object(persona))