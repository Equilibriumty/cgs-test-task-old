import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import { IUser } from 'user.type';

export const checkToken = (
  req: Request<IUser, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['token'];

  if (!token) {
    return res.status(403).send({
      message: 'No token has been provided',
    });
  }

  const secret = process.env.SECRET || 'jwtSecretToken';

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    req.user = decoded;
    next();
  });
};
