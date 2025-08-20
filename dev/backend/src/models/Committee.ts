import { Schema, Types, model } from 'mongoose';

export interface IPayoutScheduleEntry {
  month: number;
  dueDate: Date;
  receiver?: Types.ObjectId;
  paid: boolean;
}
export interface ICommittee {
  _id?: string;
  name: string;
  admin: Types.ObjectId;
  members: Types.ObjectId[];
  monthlyAmount: number;
  duration: number;
  startDate: Date;
  schedule: IPayoutScheduleEntry[];
}

const scheduleSchema = new Schema<IPayoutScheduleEntry>(
  {
    month: Number,
    dueDate: Date,
    receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    paid: { type: Boolean, default: false }
  },
  { _id: false }
);

const committeeSchema = new Schema<ICommittee>(
  {
    name: String,
    admin: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    monthlyAmount: Number,
    duration: Number,
    startDate: Date,
    schedule: [scheduleSchema]
  },
  { timestamps: true }
);

export default model<ICommittee>('Committee', committeeSchema);


