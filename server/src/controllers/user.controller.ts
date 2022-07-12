import { Response, Request } from 'express';
import UserService from '../services/user.service';
import AuthService from '../services/auth.service';

export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  async userRegistration(req: Request, res: Response) {
    const { body } = req;
    const user = await this.userService.checkUserByEmail(body);
    if (user) {
      return res.status(409).json({ message: 'This email is already used' });
    }
    const newPassword = this.authService.setPassword(body.password);
    const newUser = await this.userService.userRegistration({
      ...body,
      password: newPassword,
    });
    const { _id, email } = newUser;
    res.status(201).json(newUser);
  }

  async userLogin(req: Request, res: Response) {
    const { body } = req;
    const user = await this.userService.checkUserByEmail(body);
    if (!user) {
      res.status(401).json({ message: 'User with such email dont exist' });
      return;
    }
    const isPasswordValid = this.authService.checkPassword(
      body.password,
      user.password
    );
    if (!isPasswordValid) {
      res.status(401).json({ message: `Wrong password` });
      return;
    }
    const { _id, email } = user;
    const token = this.authService.createAuthToken({ _id, email });
    res.send({ user, token });
  }
}

const userController = new UserController(new UserService(), new AuthService());
export default userController;
