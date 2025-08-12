const express = require('express');
const dotenv = require('dotenv');
const connecToDb = require('./config/db');
const authRoute = require('./routes/auth.routes')
const cors = require('cors');
import mongoose from 'mongoose';

dotenv.config();

const port = process.env.PORT || 5000;

connecToDb();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', authRoute);

app.listen(port, () => {
    console.log("Server Running On: ", port);
})

