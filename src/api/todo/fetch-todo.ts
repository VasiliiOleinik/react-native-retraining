import { TodoMock } from '../../__mock__/todos';
import { Todo } from '../../model/todo';

export const fetchTodo = (): Promise<Todo[]> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(TodoMock);
    }, 2000);
  });
