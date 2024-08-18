import mongoose from 'mongoose';

const mealSchema = mongoose.Schema({
  mealName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  category: String,
  breadcrumbs: [String],
  image: String,
  nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
  },
  cuisine: String,
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Option',
    },
  ],
});

const Meal = mongoose.model('Meal', mealSchema);

export default Meal;
