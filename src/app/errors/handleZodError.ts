import { ZodError, ZodIssue } from "zod";
import { IGenericErrorResponse } from "../interface/error";

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errorSourses = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  return {
    statusCode: 400,
    message: "Validation Error",
    errorSourses,
  };
};
export default handleZodError;
