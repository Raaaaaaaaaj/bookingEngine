import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connecToDb from './config/db.js';
import authRoute from './routes/auth.routes.js';
import cors from 'cors';
import mongoose from 'mongoose';

// dotenv.config();

const port = process.env.PORT || 5000;

connecToDb();

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://mybookingengine.netlify.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Backend is running...');
});

app.use('/api', authRoute);

app.listen(port, () => {
    console.log("Server Running On: ", port);
})

