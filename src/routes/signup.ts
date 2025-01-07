import express from "express";
import { body } from "express-validator";
import { validateErrors } from "../middleware/express-validator-middleware";
import { signUpUserController } from "../controllers/sign-up-controller";
import multer from "multer";
import { Request, Response, NextFunction } from "express";

//tempory save to memory until validation is done. we can access the stored image in req.file, we can save it to disk using req.file.buffer, when the req is over, the reference to buffer is clean. Then nodejs garbage collector remove that image from memory.
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  (req: Request, res: Response, next: NextFunction) => {
    const image = req.file;
    if (!image) {
      res.status(400).send({
        errors: [{ message: "Image must be provided", field: "image" }],
      });
      return;
    } else if (
      image.mimetype !== "image/jpeg" &&
      image.mimetype !== "image/png"
    ) {
      res.status(400).send({
        errors: [{ message: "Image must be jpeg or png", field: "image" }],
      });
      return;
    } else if (image.size > 1024 * 1024) {
      res.status(400).send({
        errors: [{ message: "Image must be less than 1MB", field: "image" }],
      });
      return;
    }
    next();
  },
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
