//89 Eseguire una richiesta GET semplice

fetch('https://jsonplaceholder.typicode.com/posts')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});



//90 post
const update = {
  title: 'title',
  body: 'Description',
  userId: 1,
  };
  
  const posts = {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(update),
  };


//91	Gestione degli errori con async e await
const fetchData = async()=>{
    try{
        const response = await fetch('https://api.example.com/data');
        const jsondata = await response.json();
        
    }catch(error){
        console.log("Error Fetching data ",error);
    }
   
}