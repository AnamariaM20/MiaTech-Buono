import ItemList from "./itemList";

const MainComponent = () => {
    const itemsArray = ['Ana', 'Bianca', 'Gabi', 'Alexie'];
  
    return (
      <div>
        <h1>Lista di Elementi</h1>
        <ItemList items={itemsArray} />
      </div>
    );
  };
  
  export default MainComponent;