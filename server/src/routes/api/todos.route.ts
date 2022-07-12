import { Router } from "express";
import todoController from "../../controllers/todo.controller";
import tryCatchValidation from "../../middlewares/wrapper.middleware";
import schemaValidationMiddleware from "../../middlewares/validation.middleware";
import { validTodoScheme } from "../../types/todos.type";
import { existenceValidation } from "../../middlewares/existence.middleware";

const todosRouter: Router = Router();

todosRouter.get(
	"/getTodos",
	tryCatchValidation(todoController.getAllTodo.bind(todoController))
);
todosRouter.get(
	"/getTodos/:id",
	existenceValidation(),
	tryCatchValidation(todoController.getSpecifiedTodo.bind(todoController))
);
todosRouter.post(
	"/createTodo",
	schemaValidationMiddleware(validTodoScheme),
	tryCatchValidation(todoController.addTodo.bind(todoController))
);
todosRouter.put(
	"/editTodo/:id",
	existenceValidation(),
	schemaValidationMiddleware(validTodoScheme),
	tryCatchValidation(todoController.updateTodo.bind(todoController))
);
todosRouter.delete(
	"/removeTodo/:id",
	existenceValidation(),
	tryCatchValidation(todoController.removeTodo.bind(todoController))
);

export default todosRouter;
