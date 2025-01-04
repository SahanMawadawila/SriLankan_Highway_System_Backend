import express from "express";
import { body } from "express-validator";
import { validateErrors } from "../middleware/express-validator-middleware";
import { signUpUserController } from "../controllers/sign-up-controller";

const router = express.Router();

router.post(
  "/",
  [
    body("email").isEmail().withMessage("Enter a valid email address"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    //has to check image upload
  ],
  validateErrors,
  signUpUserController
);

export { router as signupRouter };
