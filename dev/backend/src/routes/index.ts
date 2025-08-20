import { Router } from 'express';
import aiRoutes from './modules/ai.routes.js';
import committeeRoutes from './modules/committee.routes.js';
import authRoutes from './modules/auth.routes.js';

const router = Router();

router.use('/ai', aiRoutes);
router.use('/committees', committeeRoutes);
router.use('/auth', authRoutes);

export default router;


