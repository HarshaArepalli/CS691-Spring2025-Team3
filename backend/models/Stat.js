import mongoose from 'mongoose';

const StatSchema = new mongoose.Schema({
  happyStudents: { type: Number, required: true },
  monthlyStreamed: { type: Number, required: true },
  satisfactionRate: { type: Number, required: true },
});

export const Stat = mongoose.model('Stat', StatSchema);