console.log("Hello, TypeScript!");


import { Todo , TodoWithMetadata , Project, TodoStatus, User, PartialTodo, TodoRecord   } from './types';
import { filterTodos } from './utils'
let todos: Todo[] = [];
console.log(todos);

function addTodo(title: string, metadata?: any, /*metadata?: string | object*/): Todo {
    const newTodo: Todo = {
      id: todos.length + 1, 
      //id: Math.floor(Math.random() * 1000)
      title: title,
      completed: false,
      metadata: metadata,
      status: TodoStatus.Pending
    };
  
    todos.push(newTodo);
    return newTodo;

  }
  
  addTodo("Learn TypeScript");
  addTodo("Build a Todo List App");
  
  console.log(todos);

  function assignTodoToUser(todoId: number, userId: number): void {
    const todo = todos.find(t => t.id === todoId);
  
    if (todo) {
      todo.userId = userId;
      console.log(`Todo "${todo.title}" assegnato a ${userId}`);
    } else {
      console.log("Todo non trovato.");
    }
  }
  
  assignTodoToUser(1, 2); 
  assignTodoToUser(2, 1); 
  
  console.log(todos);

  function getUserTodos(userId: number): Todo[] {
    return todos.filter(todo => todo.userId === userId);
  }

  
  function error(message: string): never {
    throw new Error(message); 
  }
  
  try {
    error("Qualcosa è andato storto!"); 
  } catch (e) {
    console.error(e.message); 
  }

  
  function parseInput(input: unknown): string {
    if (typeof input === 'string') {
      return input; 
    } else if (typeof input === 'number') {
      return input.toString(); 
    } else {
      error('Input non valido: deve essere una stringa o un numero');
    }
  }
  
  try {
    console.log(parseInput('Hello, world!'));  
    console.log(parseInput(12345));             
    console.log(parseInput(true));              
  } catch (e) {
    console.error(e.message);                  
  }

/*
  let todos: TodoWithMetadata[] = [
    { id: 1, title: "Learn TypeScript", completed: false, metadata: { priority: "high", dueDate: "2024-12-31" } },
    { id: 2, title: "Build a Todo List App", completed: true, metadata: { priority: "medium" } }
  ];
  
  function addTodoWithMetadata(title: string, metadata: any): TodoWithMetadata {
    const newTodo: TodoWithMetadata = {
      id: todos.length + 1, 
      title: title,
      completed: false,
      metadata: metadata 
    };
  
    todos.push(newTodo);
    return newTodo;
  }
  
  const todo1 = addTodoWithMetadata("Learn TypeScript", { priority: "high", dueDate: "2024-12-31" });
  const todo2 = addTodoWithMetadata("Build a Todo List App", { priority: "medium" });
  
  console.log(todo1);
  console.log(todo2);
  
  console.log(todos); */

  function updateTodo(id: number, updates: Partial<Todo>): Todo | undefined {
    const todo = todos.find(todo => todo.id === id);
  
    if (!todo) {
      return undefined;
    }
  
    Object.assign(todo, updates);
  
    return todo;
  };

  const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    todos: [todo1, todo2], // L'array todos è immutabile
  };

  function createProject(name: string, description: string, users: User[], todos: Todo[]): Project {
    return {
      name,
      description,
      users,
      todos
    };
  }

  const project = createProject("My Todo Project", "A project to manage todos and users.", [user1, user2], [todo1, todo2]);

  function updateTodoStatus(todoId: number, status: TodoStatus): Todo | undefined {
    const todo = todos.find(t => t.id === todoId); 
  
    if (todo) {
      todo.status = status; 
      return todo; 
    }
  

    console.error(`Todo con ID ${todoId} non trovato.`);
    return undefined;
  }
  updateTodoStatus(1, TodoStatus.InProgress)  
// Creiamo alcune istanze della classe User
const user1 = new User(1, 'Alice', 'alice@example.com');
const user2 = new User(2, 'Bob', 'bob@example.com');
const user3 = new User(3, 'Charlie'); // Senza email opzionale

// Aggiungiamo dei Todo agli utenti usando il metodo addTodo
const todo1 = addTodo('Learn TypeScript');
const todo2 = addTodo('Build a Todo List App');
const todo3 = addTodo('Finish homework');
const todo4 = addTodo('Read a book');

// Utilizziamo il metodo addTodo per aggiungere i Todo agli utenti
user1.addTodo(todo1);
user1.addTodo(todo2);

user2.addTodo(todo3);

user3.addTodo(todo4);

// Creiamo una funzione di filtro per Todo completi
const completedTodos = filterTodos(user1.todos, (todo) => todo.completed === false);

// Visualizza i Todo filtrati
console.log('Completed Todos for User 1:', completedTodos);


//////
/*
function updatePartialTodo(todos: Todo[], todoId: number, updatedTodo: PartialTodo): Todo | undefined {
    const todo = todos.find(t => t.id === todoId);
    
    if (todo) {
      Object.assign(todo, updatedTodo);
      return todo;
    }
    return undefined; 
  }
  
  const user1 = new User(1, 'Alice', 'alice@example.com');
  const user2 = new User(2, 'Bob', 'bob@example.com');
  
  const todo1 = addTodo('Learn TypeScript');
  const todo2 = addTodo('Build a Todo List App');
  
  user1.addTodo(todo1);
  user2.addTodo(todo2);
  
  const updatedTodo = updatePartialTodo(user1.todos, todo1.id, { completed: true, status: TodoStatus.Completed });
  
  if (updatedTodo) {
    console.log('Todo aggiornato:', updatedTodo);
  } else {
    console.log('Todo non trovato.');
  }
    */


  function convertArrayToRecord(todos: Todo[]): TodoRecord {
    const record: TodoRecord = {};
    
    todos.forEach(todo => {
      record[todo.id] = todo; 
    });
  
    return record;
  }
  
  const todo1 = addTodo('Learn TypeScript');
  const todo2 = addTodo('Build a Todo List App');
  const todo3 = addTodo('Complete Homework');
  
  const todosArray: Todo[] = [todo1, todo2, todo3];
  
  const todoRecord = convertArrayToRecord(todosArray);
  
  console.log(todoRecord);