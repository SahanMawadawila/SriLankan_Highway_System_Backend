import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

export const handleRefreshTokenController = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const cookie = req.cookies;

    console.log(cookie);

    if (!cookie?.jwt) {
      res.status(404).send({ message: "Cookie not found" });
      return;
    }

    //find refresh token in database
    const user = await UserModel.getUserByRefreshToken(cookie.jwt);

    if (!user) {
      res.clearCookie("jwt", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.status(204).send({ message: "User already signed out" });
      return;
    }

    //get new access token after verifying refresh token
    try {
      const payload = jwt.verify(
        cookie.jwt,
        process.env.REFRESH_TOKEN_SECRET!
      ) as { email: string };
      const userRole = user.role!;
      const accessToken = jwt.sign(
        { email: payload.email, role: userRole },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: "15m" } //change this in future
      );
      res.status(200).send({ accessToken, role: userRole });
    } catch {
      res.status(403).send({ message: "Forbidden" });
    }
  }
);
