import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import  userRouter  from './routes/user.route.js';
dotenv.config();

const MONGO_URI = process.env.MONGO;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

connectToDatabase();

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});


app.use("/api/user", userRouter);