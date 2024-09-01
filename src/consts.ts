import { Response, Request } from "express";

class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

class ErrorHandler {
  static handle(res: Response, error: Error | typeof CustomError): Response {
    if (error instanceof CustomError && error.status === 500) {
      return res
        .status(500)
        .json({ status: "Error", message: "Database problem" });
    }

    if (error instanceof CustomError && error.status) {
      return res
        .status(error.status)
        .json({ status: "Error", message: error.message });
    }

    return res
      .status(400)
      .json({ status: "Error", message: "Unexpected error" });
  }
}

module.exports = {
  CustomError,
  ErrorHandler,
};
