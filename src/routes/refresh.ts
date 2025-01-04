import express from "express";
import { handleRefreshTokenController } from "../controllers/get-new-access-token";
import cookieParser from "cookie-parser";

const router = express.Router();

router.post("/", cookieParser(), handleRefreshTokenController);

export { router as refreshRouter };
