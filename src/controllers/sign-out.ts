import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { UserModel } from "../models/userModel";
export const signoutController = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const cookie = req.cookies;

    if (!cookie?.jwt) {
      res.status(204).send({ message: "User already signed out" });
      return;
    }

    //find refresh token in database and delete it
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

    //delete refresh token from database
    await UserModel.updateRefreshToken(user.email, null);

    //delete refresh token from cookie
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(204).send({ message: "User signed out successfully" });
  }
);
