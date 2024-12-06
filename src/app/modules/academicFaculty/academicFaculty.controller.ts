import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";

export const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFaculty(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Faculty created successfully",
    data: result,
  });
});

export const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllAcademicFaculty();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Faculty fetched successfully",
    data: result,
  });
});

export const getAcademicFacultyById = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAcademicFacultyById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Faculty fetched successfully",
    data: result,
  });
});

export const updateAcademicFacultyById = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.updateAcademicFacultyById(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Faculty updated successfully",
    data: result,
  });
});

export const deleteAcademicFacultyById = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.deleteAcademicFacultyById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Academic Faculty deleted successfully",
    data: result,
  });
});
