import mongoose from "mongoose";
import { IErrorSources, IGenericErrorResponse } from "../interface/error";

export const handelValidationError = (error: mongoose.Error.ValidationError): IGenericErrorResponse => {
  const errorSourses: IErrorSources[] = Object.values(error.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    }
  );
  return {
    statusCode: 400,
    message: "Validation Error",
    errorSourses,
  };
};
