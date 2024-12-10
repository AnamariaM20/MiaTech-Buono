//86 	 Funzione asincrona semplice
/*async function func() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Here's the winner!"), 2000)
  });

  let result = await promise; 

  console.log(result); 
}

func();

// 87 	Gestione degli errori con try e catch
let value = true
async function func() {
    try{

       await new Promise((resolve, reject) => {
        if(value == true) {
          resolve() 
        } else{
          reject()
        };
      })
    } catch(e){
      console.log(e)
    }
};
func()


async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/dattteee');
    if (response.ok) {
      console.log(data);    
    }
    const data = await response.json();
    
  } catch (error) {console.error('Error:', error);
    }
}
fetchData();*/

	

// 88 Funzioni asincrone in serie ????????????????????
//Creare due funzioni asincrone che restituiscano promesse che si risolvono dopo tempi diversi. Creare una terza funzione asincrona che utilizzi await per chiamare le prime due funzioni in serie e stampare i risultati quando entrambe sono risolte.

async function newfunction() {
  return new Promise((resolve, reject) => {
      let pizza = 10
      if(pizza > 9)
      setTimeout(() => {
          resolve('Pizza per tutti')
      }, 5000);
  })
};

async function Pasta() {
  return new Promise((resolve, reject) => {
      let pasta = 10 
      if(pasta > 8)
          setTimeout(() => {
              resolve('Pasta per tutti')
      }, 7000)
  })
};

async function Frutta() {
  return new Promise((resolve, reject) => {
      let frutta = 10 
      if(frutta > 8)
          setTimeout(() => {
              resolve('Frutta per tutti')
      }, 7000)
  })
};

async function init() {
  let risultato = await newfunction()
  console.log(risultato);
}

init();

async function init() {
  let risultato = await Pasta()
  console.log(risultato);
}

init();

async function init() {
  let risultato = await Frutta()
  console.log(risultato);
}

init();