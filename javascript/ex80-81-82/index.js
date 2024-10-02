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
  //es 81 Catena di promesse con condizioni
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

  

  //82 Catena di promesse con gestione degli errori

  

  new Promise((resolve, reject) => {
    resolve(ok);
}).then(result) => {
  throw new Error("Whoops!")
  }).catch(alert); 
 

  // 83  Gestione degli errori con catch
  fetch('https://ana-server') 
  .then(response => response.json())
  .catch(err => alert(err + 'there is a problem'))

  //84 	Gestione degli errori con then e catch

  const promise = new Promise((resolve, reject) => {
    reject("false")
    resolve("true");
    
  })

  promise.then();
     
  promise.catch(e);

const ok = ()=> {
  console.log("il risposto e true");
};

const nonOk = ()=> {
  console.log("il risposto e false");
}

promise.then(ok);
     
promise.catch(nonOk);
 */

//	 85 Gestione degli errori in una catena di promesse
//perche non va?

function getWheather(){
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve("cloudy")
    }, 1000)
    })
  }

  function getWheatherIcon(weather){
    return new Promise(function(resolve, reject){
      setTimeout(()=>{
        switch("weather"){
          case 'sunny':
            resolve('☀️')
            break
          case 'cloudy':
            resolve('☁️')
            break
          case 'rainy':
            resolve('🌧️ ')
            break
          default:
            reject("no icon found")  
        }
      }, 1000)
    })
  }

  function onSucces(data){
    return console.log(`succes ${data}`)
  };
  function onError (data){
    return console.log(`Error:  ${data}`)
  };

  getWheather()
    .then(getWheatherIcon)
    .then(onSucces, onError)