import { Model, model, Schema } from 'mongoose';
import { IUser } from 'user.type';

const userSchema: Schema = new Schema({
  email: {
    type: Schema.Types.String
  },  
  password: {
    type: Schema.Types.String
  }
});

const User: Model<IUser> = model('User', userSchema);

export default User;
