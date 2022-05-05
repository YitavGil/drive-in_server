const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require("./routes/userRouter");
const movieRoute = require("./routes/movieRouter");
const listRoute = require("./routes/listRouter");

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

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
    console.log('Backend server is running! :)');
})