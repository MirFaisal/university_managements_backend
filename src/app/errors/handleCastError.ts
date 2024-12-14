import { IErrorSources, IGenericErrorResponse } from "../interface/error";

export const handleCastError = (error: any): IGenericErrorResponse => {
  const errorSourses: IErrorSources[] = [
    {
      path: error.path,
      message: error.message,
    },
  ];

  return {
    statusCode: 400,
    message: "Cast Error",
    errorSourses,
  };
};
