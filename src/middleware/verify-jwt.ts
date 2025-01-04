import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface PayLoad {
  email: string;
  role: number;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: PayLoad | null;
    }
  }
}

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  //get auth header
  const authHeader = req.headers["authorization"];

  if (!authHeader)
    return res.status(401).send({ errors: [{ message: "Unauthorized" }] });

  //if not Bearer send 401
  const arrayWithToken = authHeader.split(" ");

  if (arrayWithToken[0] !== "Bearer" || arrayWithToken[1] === undefined)
    return res.status(401).send({ errors: [{ message: "Unauthorized" }] });

  try {
    const payload = jwt.verify(
      arrayWithToken[1],
      process.env.ACCESS_TOKEN_SECRET!
    ) as PayLoad;
    req.currentUser = payload;
  } catch {
    req.currentUser = null;
    return res.status(403).send({ errors: [{ message: "Forbidden" }] });
  }
  next();
};
