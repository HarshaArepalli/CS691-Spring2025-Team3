import app from './app.js';
import connectDB from './config/db.js';

const startServer = async () => {
  const PORT = process.env.PORT || 5001;
  
  try {
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();