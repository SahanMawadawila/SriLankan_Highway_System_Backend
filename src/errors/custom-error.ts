export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  //serialize error function will output a array of objects
  abstract serializeErrors(): { message: string; field?: string }[];
}
