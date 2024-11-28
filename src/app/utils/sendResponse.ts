interface IResponse {
  statusCode: number;
  success: boolean;
  message?: string | undefined;
  data?: any;
}

export const sendResponse = (res: any, response: IResponse) => res.status(response.statusCode).json(response);
