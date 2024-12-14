export interface IErrorSources {
  path: string | number;
  message: string;
}

export interface IGenericErrorResponse {
  statusCode: number;
  message: string;
  errorSourses: IErrorSources[];
}
