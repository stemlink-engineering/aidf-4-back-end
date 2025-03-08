import { Request, Response, NextFunction } from "express";

import User from "../infrastructure/schemas/User";
import ValidationError from "../domain/errors/validation-error";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body;

    // Validate the request data` 
    if (!user.name || !user.email) {
      throw new ValidationError("Invalid user data");
    }

    // Add the user
    await User.create({
      name: user.name,
      email: user.email,
    });

    // Return the response
    res.status(201).send();
    return;
  } catch (error) {
    next(error);
  }
};
