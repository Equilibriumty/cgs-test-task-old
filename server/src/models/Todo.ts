import { Model, model, Schema } from "mongoose";
import { ITodo } from "todos.type";

const todoSchema: Schema = new Schema({
  title: {
    type: Schema.Types.String,
    // required: true,
  },
  description: {
    type: Schema.Types.String,
    // required: true,
  },
  year: {
    type: Schema.Types.Number,
    // required: true,
    default: new Date().getFullYear(),
  },
  isPublic: {
    type: Schema.Types.Boolean,
    // required: true
  },
  isCompleted: {
    type: Schema.Types.Boolean,
    // required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
  },
});

const Todo: Model<ITodo> = model("todo", todoSchema);

export default Todo;
