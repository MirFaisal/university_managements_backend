import { IErrorSources, IGenericErrorResponse } from "../interface/error";

export const handelDuplicateError = (error: any): IGenericErrorResponse => {
  const errorSourses: IErrorSources[] = [
    {
      path: Object.keys(error.keyValue)[0],
      message: `${Object.values(error.keyValue)} already exists`,
    },
  ];

  return {
    statusCode: 409,
    message: "Duplicate Error",
    errorSourses,
  };
};
