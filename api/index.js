import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from 'cookie-parser'

const app = express();
dotenv.config();

// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("Connected to mongDB...");
//   } catch (error) {
//     throw error;
//   }
// };

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

// middlewares
app.use(cookieParser())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Booking App");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);

app.use((err,req,res,next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"

 return  res.status(errorStatus).json({
  status: errorStatus,
  success: false,
  message: errorMessage,
  stack: err.stack
 })
})

app.listen(8000, () => {
  // connect();
  console.log("Server running on port 8000...");
});
