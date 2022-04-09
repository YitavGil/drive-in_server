const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () =>{
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected to mongoDB');
  } catch (error) {
    console.log(error);;
  }
}
connectDB();


app.listen(8800, () => {
    console.log('Backend server is running! :)');
})