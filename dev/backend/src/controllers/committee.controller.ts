import { Request, Response } from 'express';
import Committee from '../models/Committee.js';
import { buildSchedule } from '../utils/schedule.js';

export const createCommittee = async (req: Request, res: Response) => {
  const { name, monthlyAmount, duration, startDate } = req.body;
  const adminId = (req as any).user.id;
  const schedule = buildSchedule(new Date(startDate), duration);
  const committee = await Committee.create({
    name,
    admin: adminId,
    members: [adminId],
    monthlyAmount,
    duration,
    startDate,
    schedule
  });
  res.status(201).json(committee);
};

export const inviteMember = async (req: Request, res: Response) => {
  res.json({ ok: true });
};


