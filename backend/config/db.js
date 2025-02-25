import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const connection = mongoose.connection;
    connection.on('connected', () => console.log('MongoDB connected successfully'));
    connection.on('error', (err) => console.error('MongoDB connection error:', err));
    connection.on('disconnected', () => console.log('MongoDB disconnected'));
    
    // Initial connection success
    console.log(`MongoDB connected: ${connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;