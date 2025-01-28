import express from "express";
import {
  createBooking,
  getAllBookingsForHotel,
  getAllBookings,
} from "../application/booking.js";

const bookingsRouter = express.Router();

bookingsRouter.route("/").post(createBooking).get(getAllBookings);
bookingsRouter.route("/hotels/:hotelId").get(getAllBookingsForHotel);

export default bookingsRouter;
