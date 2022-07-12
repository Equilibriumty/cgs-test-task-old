import Joi from "joi";

export interface IDataForToken {
  _id: string;
  email: string;
}

export interface IUser {
  email: string;
  password: string;
}

export const validUserScheme: Joi.ObjectSchema<IUser> = Joi.object({
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } }),
  password: Joi.string().required().min(4).max(15),
});

export type userSchemeTypes = typeof validUserScheme;
