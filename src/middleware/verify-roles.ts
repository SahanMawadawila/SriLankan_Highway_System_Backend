//this should call after the verify token middleware
import { Request, Response, NextFunction } from "express";

export const verifyRoles = (allowedRole: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.currentUser?.role;
    if (userRole !== allowedRole) {
      res.status(401).send({ message: "Unauthorized" });
      return;
    }
    next();
  };
};
