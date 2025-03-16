import express from "express";
import {
  createHotel,
  deleteHotel,
  generateResponse,
  getAllHotels,
  getHotelById,
  updateHotel,
} from "./../application/hotel";
import { isAuthenticated } from './middlewares/authentication-middleware';
import { isAdmin } from './middlewares/authorization-middleware';
import { createEmbeddings } from "../application/embedding";
import { retrieve } from "../application/retrieve";
const hotelsRouter = express.Router();

hotelsRouter.route("/").get(getAllHotels).post(isAuthenticated, isAdmin, createHotel);
hotelsRouter
  .route("/:id")
  .get(getHotelById)
  .put(updateHotel)
  .delete(deleteHotel);
hotelsRouter.route("/embeddings/create").post(createEmbeddings);
hotelsRouter.route("/search/retrieve").get(retrieve);

export default hotelsRouter;
