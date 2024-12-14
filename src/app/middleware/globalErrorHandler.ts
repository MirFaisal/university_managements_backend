import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import config from "../config";
import { handelDuplicateError } from "../errors/handelDuplicateError";
import { handelValidationError } from "../errors/handelValidationError";
import { handleCastError } from "../errors/handleCastError";
import handleZodError from "../errors/handleZodError";
import { IErrorSources } from "../interface/error";
import AppError from "../utils/appError";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  let errorSourses: IErrorSources[] = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  // error from zod
  if (err instanceof ZodError) {
    const siplifiedError = handleZodError(err);
    statusCode = siplifiedError.statusCode;
    message = siplifiedError.message;
    errorSourses = siplifiedError.errorSourses;
  } else if (err.name === "ValidationError") {
    const siplifiedError = handelValidationError(err);
    statusCode = siplifiedError.statusCode;
    message = siplifiedError.message;
    errorSourses = siplifiedError.errorSourses;
  } else if (err.name === "CastError") {
    const siplifiedError = handleCastError(err);
    statusCode = siplifiedError.statusCode;
    message = siplifiedError.message;
    errorSourses = siplifiedError.errorSourses;
  } else if (err.code === 11000) {
    const siplifiedError = handelDuplicateError(err);
    statusCode = siplifiedError.statusCode;
    message = siplifiedError.message;
    errorSourses = siplifiedError.errorSourses;
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSourses = [
      {
        path: "",
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSourses = [
      {
        path: "",
        message: err.message,
      },
    ];
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    errorSourses,
    // err,
    stack: config.node_env === "development" ? err.stack : null,
  });
};
