import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
} from "./../application/hotel";
import { isAuthenticated } from './middlewares/authentication-middleware';
import { isAdmin } from './middlewares/authorization-middleware';

const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getAllHotels).post(isAuthenticated, isAdmin, createHotel);
hotelsRouter
  .route("/:id")
  .get(getHotelById)
  .put(updateHotel)
  .delete(deleteHotel);

export default hotelsRouter;
