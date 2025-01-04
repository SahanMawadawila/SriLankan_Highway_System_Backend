import express from "express";
import { body } from "express-validator";
import { validateErrors } from "../middleware/express-validator-middleware";
import { signInController } from "../controllers/sign-in-controller";

const router = express.Router();

router.post(
  "/",
  [
    body("email").isEmail().withMessage("Enter a valid email address"),
    body("password").trim().notEmpty().withMessage("Password must be provided"),
  ],
  validateErrors,
  signInController
);

export { router as signinRouter };
