import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";

export class requestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

    Object.setPrototypeOf(this, requestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map((error) => {
      //param property not in the valicationError types declaration. so we have to type casting it
      console.log((error as any).path);
      return { message: error.msg, field: (error as any).path };
    });
  }
}
