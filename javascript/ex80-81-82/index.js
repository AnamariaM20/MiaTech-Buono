//es 80

/*new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
  
    console.log(result); // 1
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
  });
  */
  //es 81
/*
  new Promise(function(resolve, reject) {

    setTimeout(() => resolve(4), 1000); 
  
  }).then(function(result){
    if(result % 2 != 0) { 
        return console.log("tutto bene")
  } else {
    return console.log("non va bene")
  }})


    .catch(err => {
    console.log('Oh noooo!!');
    console.log(err);
  })


    makePizza(['cheese', 'pineapple'])
  .then(pizza => {
    console.log(pizza);
  })
  .catch(handleError);
  

  //82

  

  new Promise((resolve, reject) => {
    resolve(ok);
}).then(result) => {
  throw new Error("Whoops!")
  }).catch(alert); 
  */