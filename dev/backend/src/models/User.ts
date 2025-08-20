import { Schema, model } from 'mongoose';

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'admin' | 'member';
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'member'], default: 'member' }
  },
  { timestamps: true }
);

export default model<IUser>('User', userSchema);


