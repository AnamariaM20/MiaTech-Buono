let students = [{
    name: "Mary",
    grade: 34,
},
{
    name: "giacomo",
    grade: 44,
},
{
    name: "Jhon",
    grade : 80,
}]

const passedStudents = students.find((student) => {
    return student.grade > 40;
});

console.log(passedStudents);

// student e il nome del ogni oggetto,invece di scrivere nume: giacome e grade: 80., cosi, tramite pippo o student, io do un nomele al oggetto di ogni array, 
