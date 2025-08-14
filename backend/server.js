import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connecToDb from './config/db.js';
import authRoute from './routes/auth.routes.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express(); // pehle app create karo

app.use(cors({
  origin: ['http://localhost:4200', 'https://mybookingengine.netlify.app'],
  credentials: true
}));

const port = process.env.PORT || 5000;

connecToDb();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running...');
});

app.use('/api', authRoute);

app.listen(port, () => {
    console.log("Server Running On: ", port);
});