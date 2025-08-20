import { Schema, model, Types } from 'mongoose';

export interface IPayment {
  _id?: string;
  committee: Types.ObjectId;
  member: Types.ObjectId;
  month: number;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  paidAt?: Date;
}

const paymentSchema = new Schema<IPayment>(
  {
    committee: { type: Schema.Types.ObjectId, ref: 'Committee' },
    member: { type: Schema.Types.ObjectId, ref: 'User' },
    month: Number,
    amount: Number,
    status: { type: String, enum: ['paid', 'pending', 'overdue'], default: 'pending' },
    paidAt: Date
  },
  { timestamps: true }
);

export default model<IPayment>('Payment', paymentSchema);


