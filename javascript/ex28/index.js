let numbers = [1, 2, 3, 4, 5]

numbers.forEach((element) => {
  console.log(element * 2);
});

let squaredNumbers = numbers.map((number) => {
    return Math.pow(number, 2)
    
});
console.log(squaredNumbers)
