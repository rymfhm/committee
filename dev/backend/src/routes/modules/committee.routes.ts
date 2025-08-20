import { Router } from 'express';
import { createCommittee } from '../../controllers/committee.controller.js';
import { protect } from '../../middlewares/auth.js';

const router = Router();

router.post('/', protect(['admin']), createCommittee);
router.get('/', protect(), async (req, res) => {
  const { default: Committee } = await import('../../models/Committee.js');
  const all = await Committee.find().limit(50);
  res.json(all);
});

export default router;


