import mongoose from 'mongoose';

const NutritionSchema = new mongoose.Schema({
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
});

const OptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number },
});

const OptionSetSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  options: [OptionSchema],
});

const MealSchema = new mongoose.Schema({
  mealName: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
  breadcrumbs: [String],
  image: { type: String, required: true },
  nutrition: NutritionSchema,
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OptionSet',
    },
  ],
  cuisine: String,
});

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  meals: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
  ],
});

const Category = mongoose.model('Category', CategorySchema);
const Meal = mongoose.model('Meal', MealSchema);
const OptionSet = mongoose.model(
  'OptionSet',
  OptionSetSchema
);

export { Meal, Category, OptionSet };
