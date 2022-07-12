import * as Yup from 'yup';
export interface ITodo {
  _id: string;
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isCompleted: boolean;
}

export interface IUser {
  email: string;
  password: string;
}

export type ItoDoWithoutId = Omit<ITodo, '_id'>;
export type toDoId = ITodo['_id'];

export const todoValidationScheme = Yup.object().shape({
  title: Yup.string()
    .min(4, '4+ characters')
    .max(40, '40 characters')
    .required(),
  description: Yup.string()
    .min(5, '5+ characters')
    .max(140, '140 characters')
    .required(),

  year: Yup.number().required().positive().integer(),
  isPublic: Yup.boolean().required(),
  isCompleted: Yup.boolean().required(),
});

export const userValidationScheme = Yup.object({
  email: Yup.string().email(),
  password: Yup.string().min(4).max(15),
});

export const QUERY_KEYS = {
  todos: 'todos',
  specificTodo: 'specificTodo',
};
