export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoSlice {
  isLoading: boolean;
  todos: Todo[];
  error: string;
}
