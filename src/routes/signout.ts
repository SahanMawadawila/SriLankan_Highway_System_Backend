import express from "express";
import { signoutController } from "../controllers/sign-out";
import { verifyJwt } from "../middleware/verify-jwt";
import cookieParser from "cookie-parser";

const router = express.Router();

router.post("/", verifyJwt as any, cookieParser(), signoutController);

export { router as signoutRouter };
