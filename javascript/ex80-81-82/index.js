/*es 80

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
  
    console.log(result); // 1
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); 
    return result + 3;
  
  }).then(function(result) {
  
    console.log(result); 
    return result + 3;
  
  });

  //es 81 Catena di promesse con condizioni

  new Promise(function(resolve, reject) {

    setTimeout(() => resolve(4), 1000); 
  
  }).then(function(result){
    if(result % 2 != 0) { 
      console.log("tutto bene")
  } else {
      console.log("non va bene")
  }})


    .catch(err => {
    console.log('Oh noooo!!');
    console.log(err);
  })

  

  //82 Catena di promesse con gestione degli errori

  new Promise((resolve, reject) => { 
    let value = Math.random()
    if(value >= 0.5) {
      resolve() // non e obligatorio di avere un argumento
    } else{
      reject()
    };
});


  // 83  Gestione degli errori con catch
  fetch('https://ana-server') 
  .then(response => response.json())
  .catch(err => alert(err + 'there is a problem'))

   

  //84 	Gestione degli errori con then e catch

function nuovaVariabile() {
    return new Promise((resolve, reject) => {
        if (false) { 
        resolve('promessa risolta');
        
        } else {
        reject('promessa rifiutata');
        
    }
})
}

nuovaVariabile()
.then((messaggio) => {
    console.log(messaggio);
})

.catch((errore) => {
    console.error(errore);
})

.finally(() => {
    console.log('operazione completata')
})

//	 85 Gestione degli errori in una catena di promesse
//perche non va?

function getWheather(){
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve("pdbjhd")
    }, 1000)
    })
  }

  function getWheatherIcon(weather){
    return new Promise(function(resolve, reject){
      setTimeout(()=>{
        switch(weather){
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
    .then(getWheatherIcon)// si trata della promise di getWheather
    .then(onSucces)// si trata della promise di getWheatherIcon
    .catch(onError)

  