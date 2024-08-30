let expenses = [200, 340, 60, 11, 55]
const expensesTotal = expenses.reduce((accumulate, curent) => {
    return accumulate + curent;
}, 
0) ;
console.log(expensesTotal);

let words = ["banana", "apple" ,"cherry" ,"date"];
words.sort();
console.log(words);