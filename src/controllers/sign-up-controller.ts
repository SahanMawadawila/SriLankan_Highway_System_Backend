import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import bcrypt from "bcrypt";
import { HandleOtherErrors } from "../errors/handle-other-errors";
import asyncHandler from "express-async-handler";

//user registration
export const signUpUserController = asyncHandler(
  async (req: Request, res: Response) => {
    //check user is exist
    const { email, password } = req.body;
    const user = await UserModel.getUserByEmail(email);

    if (user) {
      throw new HandleOtherErrors("User already exists", 409);
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10);
    //create user
    const newUser = await UserModel.createUser(email, hashPassword);

    //send response

    res.status(201).send({ message: "User created successfully" });
  }
);
