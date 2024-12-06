import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  const newStudent = await UserService.createstudent(password, student);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created successfully",
    data: newStudent,
  });
});

export const UserController = {
  createUser,
};
