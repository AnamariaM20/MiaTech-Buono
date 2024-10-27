import { useEffect, useState, useRef } from "react"
import Login from "./components/Login"
import UncontrolledInput from "./components/UncontrolledInput"
import ItemList from "./components/itemList"
import MainComponent from "./components/MainComponent"
import Card from "./components/Card"
import TodoList from "./components/TodoList "
import { TodoProvider } from './TodoContext'
import Home from "./pages/home"
import About from "./pages/about"
import TodoDetail from "./components/TodoDetail"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {

  
  const [count, setCount] = useState(0)
  const handleClick1 = () => {
    setCount(count +1)
  }
  const handleClick2 = () => {
    setCount(count -1)
  }
  const resetCounter = () => {
    setCount(0);
  };
  const myItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];



  const { data, loading, error } = useFetch('https://api.example.com/data');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

//ex 10 	Sincronizza il titolo con il contatore
  useEffect(() => {
    document.title = `${count}`
  }, [count])


  return (
    <>
    <h1>Hello World. Here is numere {count}</h1>
    <button onClick={handleClick1}>Increment</button>
    <button onClick={handleClick2}>Decrement</button>
    <button onClick={resetCounter}>Reset</button>
    <Login/>
    <UncontrolledInput/>
    
    <div>
      <h1>My Item List</h1>
      <ItemList items={myItems} />
    </div>
    <MainComponent/>
    <div>
      <Card>
        <h2>Here in Sardegna</h2>
        <p>Questa e una isola bella.</p>
      </Card>
    </div>
    <div>
      <h1>Dati recuperati:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    <div>
      <h1>Todo List</h1>
      <TodoList />
    </div>
    <TodoProvider>
      //<h1>Todo List</h1>
      //<TodoList />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="todos/:id" element={<TodoDetail/>} />
        </Switch>
      </Router>
    </TodoProvider>
    </>

  )
}

export default App
