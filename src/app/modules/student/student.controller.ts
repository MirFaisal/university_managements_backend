import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { studentService } from "./student.service";

export const getAllStudent = catchAsync(async (req, res) => {
  const allStudent = await studentService.getAllStudents(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student fetched successfully",
    data: allStudent,
  });
});

export const getSpecificStudent = catchAsync(async (req, res) => {
  const specificStudent = await studentService.getSpecificStudent(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student fetched successfully",
    data: specificStudent,
  });
});

export const updateStudent = catchAsync(async (req, res) => {
  const updatedStudent = await studentService.updateStudent(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student updated successfully",
    data: updatedStudent,
  });
});

export const deleteStudent = catchAsync(async (req, res) => {
  const deletedStudent = await studentService.deleteStudent(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student deleted successfully",
    data: deletedStudent,
  });
});
