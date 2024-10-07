//92 -cors 1
/*const fetchPromise = fetch("https://www.chemia.it/nutriland/", 
    {
       method: "get"
    }
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })*/

  //93 -cors 2


  

  async function funcProxy() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
    const apiUrl = 'https://api.github.com/users';
  
    try {
      const response = await fetch(proxyUrl + apiUrl);

      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status}`);
      }
  
      const dati = await response.json();
      
      console.log(dati);
    } catch (errore) {
      console.error("Si è verificato un errore:", errore.message);
    }
  }
  
  funcProxy();



//94. 	

//Utilizzare un'API che supporta CORS
//Creare uno script che faccia una richiesta GET a un'API pubblica che 
//supporta CORS. Stampare i dati restituiti nella console.