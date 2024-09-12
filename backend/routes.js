import express from 'express';
import { Category, Meal } from './models/Models.js';

const router = express.Router();

router.get('/items', async (req, res, next) => {
  try {
    const items = await Category.find().populate('meals');

    res.json(items);
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.get('/items/:title', async (req, res, next) => {
  try {
    const title = req.params.title;
    const meal = await Meal.findOne({
      mealName: title,
    }).populate('options');
    res.json(meal);
  } catch (err) {
    res.status(500).json({ error: 'Item not found' });
  }
});

router.get('/categories', async (req, res, next) => {
  try {
    const categories = await Category.find().select('name');
    res.json(categories);
  } catch (err) {}
});

export default router;
