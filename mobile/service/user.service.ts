import { IUser } from '../types/types';
import HttpService from './http.service';

class UserService extends HttpService {
  constructor() {
    super();
  }

  registerApi = '/user/register';
  loginApi = '/user/login';

  registerUser(user: IUser) {
    return this.register(this.registerApi, user);
  }

  loginUser(user: IUser) {
    return this.login(this.loginApi, user);
  }
}

const userApi = new UserService();
export default userApi;
