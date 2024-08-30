//es 15 

    let myArray = [1, 2, 5, 8, 20, 34]
    let reverse = []
    for(let i = myArray.length -1; i >=  0; i--) {
       let reverse1 = myArray[i]
       reverse.push(reverse1)
    }
    console.log(reverse)
    
    console.log(myArray.length)