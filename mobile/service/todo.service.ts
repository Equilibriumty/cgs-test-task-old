import { HttpService } from './http.service';
import { ITodo, ItoDoWithoutId } from '../types/types';

class TodoService extends HttpService {
  constructor() {
    super();
  }

  getTodos(): Promise<ITodo[]> {
    return this.get('/todos/getTodos');
  }

  getSpecificTodo(id: string): Promise<any> {
    return this.getOneTodo('/todos/getTodos', id);
  }
  createTodo(data: ItoDoWithoutId) {
    return this.post(data, '/todos/createTodo');
  }

  editTodo(data: Partial<ItoDoWithoutId>, id: string) {
    return this.put(data, id, '/todos/editTodo');
  }

  removeTodo(id: string) {
    return this.delete(id, '/todos/removeTodo');
  }
}

const todoApi = new TodoService();
export default todoApi;
