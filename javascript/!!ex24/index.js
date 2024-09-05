
function createCounter(x) {// la funzione acceta un parametro con valore di partenza;
    let count = x;
    return { 
      increment(){ 
        count += 1;
        return count;
      },
      decrement(){
        count -= 1;
        return  count;
      },
    };
  }
// se metto qua fuori let count = x; le stesse 2 functione partono da questo valore di partenza; 
  
  let counter1 = createCounter(10);// qua mettiamo il valore di partenza; 
  let counter2 = createCounter(20);
  console.log(counter1.increment());
  console.log(counter2.increment());
