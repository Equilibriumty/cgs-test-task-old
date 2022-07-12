import { IDataForToken } from '../types/user.type';
import User from '../models/User';

export default class UserService {
  async userRegistration(data: IDataForToken) {
    const newUser = await User.create(data);
    return newUser;
  }

  async checkUserByEmail(data: IDataForToken) {
    const { email } = data;
    const user = await User.findOne({ email });
    return user;
  }
}
