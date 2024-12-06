import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AcademicDepartmentService } from "./academicDepartment.service";

/**
 * Creates a new academic department.
 */
export const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.createAcademicDepartment(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Department created successfully",
    data: result,
  });
});

/**
 * Fetches all academic departments.
 */
export const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.getAllAcademicDepartment();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Department fetched successfully",
    data: result,
  });
});

/**
 * Fetches a single academic department by its id.
 */
export const getAcademicDepartmentById = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.getAcademicDepartmentById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Department fetched successfully",
    data: result,
  });
});

/**
 * Updates a single academic department by its id.
 */
export const updateAcademicDepartmentById = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.updateAcademicDepartmentById(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Department updated successfully",
    data: result,
  });
});

/**
 * Deletes a single academic department by its id.
 */
export const deleteAcademicDepartmentById = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentService.deleteAcademicDepartmentById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Department deleted successfully",
    data: result,
  });
});
