import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student } = req.body;

    const newStudent = await UserService.createstudent(password, student);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User created successfully",
      data: newStudent,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
