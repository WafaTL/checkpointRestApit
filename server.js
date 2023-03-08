
const mongoose=require('mongoose');
const express=require('express');
require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/dbConnection');

require('dotenv').config();
const app=express();
const port = process.env.PORT || 5000;
connectDB();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users',require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`.bold.cyan))