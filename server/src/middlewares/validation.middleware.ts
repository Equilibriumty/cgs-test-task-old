import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { todoSchemeTypes } from "todos.type";
import { userSchemeTypes } from "user.type";

const schemaValidationMiddleware =
  (schema: Joi.Schema<todoSchemeTypes | userSchemeTypes>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const value = await schema.validateAsync(req.body);
      return value
        ? next()
        : res.status(400).send({ msg: "Something wrong with validation" });
    } catch (error) {
      res.status(400).send({ msg: "Something wrong with validation" });
    }
  };

export default schemaValidationMiddleware;
