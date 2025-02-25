import express from 'express';
import { Stat } from '../models/Stat.js';

const router = express.Router();

// Get stats
router.get('/', async (req, res) => {
  try {
    const stats = await Stat.findOne();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;