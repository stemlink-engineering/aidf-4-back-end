import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  reviews: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stripePriceId: {
    type: String,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
