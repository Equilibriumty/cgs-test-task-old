import { Request, Response, NextFunction } from "express";

const tryCatchValidation =
  (controller: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await controller(req, res, next);
      res.send(result);
    } catch (e) {
      next(e);
    }
  };

export default tryCatchValidation;
