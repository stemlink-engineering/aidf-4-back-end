import "dotenv/config";
import express from "express";
import connectDB from "./infrastructure/db.js";

import hotelsRouter from "./api/hotel.js";
import usersRouter from "./api/user.js";
import bookingsRouter from "./api/booking.js";

// Create an Express instance
const app = express();
// Middleware to parse JSON data in the request body
app.use(express.json());

connectDB();

app.use("/api/hotels", hotelsRouter);
app.use("/api/users", usersRouter);
app.use("/api/bookings", bookingsRouter);

// Define the port to run the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));
