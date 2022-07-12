import { ITodo, ITodoData } from "todos.type";
import Todo from "../models/Todo";

export default class TodoService {
  async findAll(data: ITodo) {
    const allTodos = await Todo.find(data, { __v: 0, owner: 0 });
    return allTodos;
  }
  async findById(id: string) {
    const foundTodo = await Todo.findById(id, { __v: 0, owner: 0 });
    return foundTodo;
  }
  async addTodo(todo: ITodo) {
    const newTodo = await Todo.create(todo);
    return newTodo;
  }
  async updateTodo(data: ITodoData) {
    const { id, body } = data;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { ...body },
      { new: true }
    );
    return updatedTodo;
  }
  async removeTodo(id: string) {
    const removedTodo = await Todo.findByIdAndRemove(id);
    return removedTodo;
  }
}
