import connectDB from './dbconnect'
const mongoose = require("mongoose");
const dotenv = require("dotenv");
import {eventRoute} from './routes/eventRoute';

const express = require('express'); 

connectDB();

dotenv.config()

const app = express();
console.log(app);

app.use('/api/events', eventRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App is running in ${PORT}`))