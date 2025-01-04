import { CustomError } from "./custom-error";

export class HandleOtherErrors extends CustomError {
  constructor(public message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, HandleOtherErrors.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
