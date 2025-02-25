import mongoose from 'mongoose';

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: Number, required: true },
  // Add any other fields you need
});

export const Class = mongoose.model('Class', ClassSchema);