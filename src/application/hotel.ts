import { NextFunction, Request, Response } from "express";

import Hotel from "../infrastructure/schemas/Hotel";
import NotFoundError from "../domain/errors/not-found-error";
import ValidationError from "../domain/errors/validation-error";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getAllHotels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
    return;
  } catch (error) {
    next(error);
  }
};

export const getHotelById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotelId = req.params.id;
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      throw new NotFoundError("Hotel not found");
    }

    res.status(200).json(hotel);
    return;
  } catch (error) {
    next(error);
  }
};

export const createHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotel = req.body;
    // Validate the request data
    if (
      !hotel.name ||
      !hotel.location ||
      !hotel.image ||
      !hotel.price ||
      !hotel.description
    ) {
      throw new ValidationError("Invalid hotel data");
    }

    // Add the hotel
    await Hotel.create({
      name: hotel.name,
      location: hotel.location,
      image: hotel.image,
      price: parseInt(hotel.price),
      description: hotel.description,
    });

    // Return the response
    res.status(201).send();
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotelId = req.params.id;
    await Hotel.findByIdAndDelete(hotelId);

    // Return the response
    res.status(200).send();
    return;
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotelId = req.params.hotelId;
    const updatedHotel = req.body;

    // Validate the request data
    if (
      !updatedHotel.name ||
      !updatedHotel.location ||
      !updatedHotel.rating ||
      !updatedHotel.reviews ||
      !updatedHotel.image ||
      !updatedHotel.price ||
      !updatedHotel.description
    ) {
      throw new ValidationError("Invalid hotel data");
    }

    await Hotel.findByIdAndUpdate(hotelId, updatedHotel);

    // Return the response
    res.status(200).send();
    return;
  } catch (error) {
    next(error);
  }
};
