import 'dotenv/config';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Committee from '../models/Committee.js';
import bcrypt from 'bcryptjs';
import { buildSchedule } from '../utils/schedule.js';

(async () => {
  await connectDB(process.env.MONGO_URI!);
  await User.deleteMany({});
  await Committee.deleteMany({});
  const salt = await bcrypt.genSalt(10);

  const admin = await User.create({
    name: 'Admin',
    email: 'admin@test.com',
    phone: '03001234567',
    password: await bcrypt.hash('password', salt),
    role: 'admin'
  });

  const members = await User.insertMany(
    await Promise.all(
      Array.from({ length: 8 }).map(async (_, i) => ({
        name: `Member ${i + 1}`,
        email: `member${i + 1}@test.com`,
        phone: `0300${1000000 + i}`,
        password: await bcrypt.hash('password', salt),
        role: 'member'
      }))
    )
  );

  const committee = await Committee.create({
    name: 'First Committee',
    admin: admin._id,
    members: [admin._id, ...members.map(m => m._id)],
    monthlyAmount: 10000,
    duration: 9,
    startDate: new Date(),
    schedule: buildSchedule(new Date(), 9)
  });

  console.log('Seeded:', { admin: admin.email, members: members.length, committee: committee.name });
  process.exit(0);
})();


