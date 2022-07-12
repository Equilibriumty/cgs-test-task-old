import { NextFunction, Request, Response } from "express";
import Todo from "../models/Todo";

export const existenceValidation =
	() => async (req: Request, res: Response, next: NextFunction) => {
		const { id } = req.params;
		const existingData = Todo.exists({ _id: id });
		return (await existingData)
			? next()
			: res.status(401).send({ msg: "No such todo found" });
	};
