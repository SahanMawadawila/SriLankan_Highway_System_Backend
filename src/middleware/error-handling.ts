import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    //sended object looks like
    /* {
      errors: [
      {
      message=""
      field(optional)=""
      }

      ]
    } */
  }
  res.status(500).send({
    errors: [{ message: "Something went wrong", field: "form" }],
  });
};
