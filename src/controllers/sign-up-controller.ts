import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import bcrypt from "bcrypt";
import { HandleOtherErrors } from "../errors/handle-other-errors";
import asyncHandler from "express-async-handler";
import { s3 } from "../config/aws-config";
import { PutObjectCommand } from "@aws-sdk/client-s3";
//use sharp to resize image

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
    // Process the file upload to s3
    const params = {
      Bucket: process.env.BUCKET_NAME!,
      Key: `${email}profile`,
      Body: req.file?.buffer,
      ContentType: req.file?.mimetype,
    };

    //upload to s3
    try {
      const command = new PutObjectCommand(params);
      await s3.send(command);
    } catch (error) {
      console.log(error);
      throw new HandleOtherErrors("Error in uploading image", 500);
    }

    //create user
    const newUser = await UserModel.createUser(
      email,
      hashPassword,
      2024,
      `${email}profile`
    );

    //send response

    res.status(201).send({ message: "User created successfully" });
  }
);
