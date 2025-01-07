import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";

export const userController = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.send({ message: "hello" });
  }
);
