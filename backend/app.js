import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import classRoutes from './routes/classes.js';
import statRoutes from './routes/stats.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/stats', statRoutes);

// Connect to MongoDB
connectDB();

export default app;