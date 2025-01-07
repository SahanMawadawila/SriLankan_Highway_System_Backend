import express from "express";
import { verifyJwt } from "../middleware/verify-jwt";
import { verifyRoles } from "../middleware/verify-roles";
import { userController } from "../controllers/user-controller";

const router = express.Router();

router.get("/", verifyJwt as any, verifyRoles(2024), userController);

export { router as userRouter };
