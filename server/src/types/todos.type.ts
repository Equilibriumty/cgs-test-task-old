import { Document } from "mongoose";
import Joi from "joi";
export interface ITodo extends Document {
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isCompleted: boolean;
  owner: string;
}

export interface ITodoData {
  id: string;
  body: ITodo;
}

export const validTodoScheme: Joi.ObjectSchema<ITodo> = Joi.object({
  title: Joi.string().min(4).max(40).required(),
  description: Joi.string().min(1).max(140).required(),
  year: Joi.number(),
  isPublic: Joi.boolean(),
  isCompleted: Joi.boolean(),
});

export type todoSchemeTypes = typeof validTodoScheme;
