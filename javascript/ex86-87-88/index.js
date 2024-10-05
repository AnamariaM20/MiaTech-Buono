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

let funct1 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(4), 1000); 
})

let funct2 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(10), 5000); 
})

async function funct3(){
  let abc = await PromiseAll([funct1, funct2])
  console.log(abc)
}
funct3()