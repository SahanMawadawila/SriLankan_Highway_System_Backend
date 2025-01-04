import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { requestValidationError } from "../errors/request-validation-error";

export const validateErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new requestValidationError(errors.array());
  }

  next();
};
