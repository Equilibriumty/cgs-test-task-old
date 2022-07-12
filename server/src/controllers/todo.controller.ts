import { Request } from "express";
import { ITodo, ITodoData } from "todos.type";
import Todo from "../models/Todo";
import TodoService from "../services/todo.service";

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request<ITodo[], {}, {}>) {
    return await this.todoService.findAll({ owner: _.user._id });
  }

  async getSpecifiedTodo(req: Request<ITodoData, {}, {}>) {
    const { id } = req.params;
    return await this.todoService.findById(id);
  }

  async addTodo(req: Request<ITodo, {}, {}>) {
    const { body, user } = req;
    return await this.todoService.addTodo(
      new Todo({ ...body, owner: user._id })
    );
  }

  async updateTodo(req: Request<ITodoData, {}, ITodo>) {
    const {
      params: { id },
      body,
    } = req;
    return await this.todoService.updateTodo({ id, body });
  }

  async removeTodo(req: Request<ITodoData, {}, {}>) {
    const { id } = req.params;
    return await this.todoService.removeTodo(id);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
