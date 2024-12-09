export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    status: TodoStatus;
    userId?: number;
    metadata?: any
    //metadata?: string | object
  }
export interface TodoWithMetadata extends Todo {
    metadata: any;
  }

export interface User {
    id: number;
    name: string;
    email?: string; // email è opzionale
    todos: ReadonlyArray<Todo>;
}

function getTodoSummary(todo: Todo): [string, boolean] {
    // Restituisce una tupla contenente il titolo e lo stato di completamento
    return [todo.title, todo.completed];
  }
export interface Project {
    name: string;
    description: string;
    users: User[];
    todos: Todo[];
  }  

export enum TodoStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed"
  }

export type PartialTodo = {
    [K in keyof Todo]?: Todo[K];
  };

export type TodoRecord = Record<number, Todo>;
