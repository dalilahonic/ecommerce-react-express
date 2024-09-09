import express from 'express';
import { Category } from './models/Models.js';

const router = express.Router();

router.get('/items', async (req, res, next) => {
  try {
    const items = await Category.find()
      .sort({ _id: -1 })
      .populate('meals');

    res.json(items);
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get('/items/:itemId', (req, res, next) => {
  //...
});

export default router;
