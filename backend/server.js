import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connecToDb from './config/db.js';
import authRoute from './routes/auth.routes.js';
import cors from 'cors';
const allowedOrigins = [
  'http://localhost:4200',              // Local development
  'https://mybookingengine.netlify.app' // Production frontend
];
import mongoose from 'mongoose';

// dotenv.config();

// app.use(cors());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS policy: This origin is not allowed';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));


const port = process.env.PORT || 5000;

connecToDb();

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Backend is running...');
});

app.use('/api', authRoute);

app.listen(port, () => {
    console.log("Server Running On: ", port);
})

