import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IDataForToken } from 'user.type';

export default class AuthService {
  createAuthToken(data: IDataForToken) {
    const secret = process.env.SECRET || 'jwtSecretToken';
    if (typeof secret === 'string') {
      const token = jwt.sign(data, secret, { expiresIn: 360000 });
      return token;
    }
  }

  setPassword(password: string) {
    return (password = bcrypt.hashSync(password, bcrypt.genSaltSync(10)));
  }

  checkPassword(passwordFromDB: string, passwordFromReq: string) {
    return bcrypt.compareSync(passwordFromDB, passwordFromReq);
  }
}
