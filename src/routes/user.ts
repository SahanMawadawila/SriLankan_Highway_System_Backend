import express from "express";
import { verifyJwt } from "../middleware/verify-jwt";
import { verifyRoles } from "../middleware/verify-roles";

const router = express.Router();

router.get("/", verifyJwt as any, verifyRoles(202422), (req, res) => {
  res.send({ message: "User route" });
});

export { router as userRouter };
