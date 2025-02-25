const mongoose = require('mongoose');

const MealPlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  calories: { type: Number, required: true },
});

module.exports = mongoose.model('MealPlan', MealPlanSchema);