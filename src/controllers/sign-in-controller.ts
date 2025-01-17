import { UserModel } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { HandleOtherErrors } from "../errors/handle-other-errors";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../config/aws-config";

export const signInController = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await UserModel.getUserByEmail(email);

    if (!user) {
      throw new HandleOtherErrors("User not found", 404);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password!);
    if (!isPasswordMatch) {
      throw new HandleOtherErrors("Invalid credentials", 401);
    }

    let url;
    if (user.photo_url) {
      const getObjectParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: user.photo_url,
      };

      try {
        const command = new GetObjectCommand(getObjectParams);
        url = await getSignedUrl(s3, command, { expiresIn: 3600 });
        if (!url) {
          throw new HandleOtherErrors("Server Error", 500);
        }
        console.log("Signed URL:", url);
      } catch (error) {
        console.log(error);
        throw new HandleOtherErrors("Error generating signed URL", 500);
      }
    }

    const userRole = user.role!;
    const photo_url = url ? url : "";

    //generate access token
    const accessToken = jwt.sign(
      { email: user.email, role: userRole },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: "15m" } //change this in future
    );

    //generate refresh token
    const refreshToken = jwt.sign(
      { email: user.email },
      process.env.REFRESH_TOKEN_SECRET!,
      { expiresIn: "1d" }
    );

    //save refresh token to database
    const updatedUser = await UserModel.updateRefreshToken(email, refreshToken);

    //set refresh token to cookie
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24, //1 day
    });

    //send response
    res
      .status(200)
      .send({ accessToken, role: userRole, photo_url, email: user.email });
  }
);
