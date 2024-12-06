import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { academicSemisterSemisterService } from "./academicSemister.service";

const createAcademicSemister = catchAsync(async (req, res) => {
  const newSemister = await academicSemisterSemisterService.createAcademicSemister(req.body);

  sendResponse(res, {
    message: "Academic semister created successfully",
    statusCode: 200,
    success: true,
    data: newSemister,
  });
});

const getAllAcademicSemister = catchAsync(async (req, res) => {
  const allSemister = await academicSemisterSemisterService.getAllAcademicSemister();

  sendResponse(res, {
    success: true,
    message: "Academic semister fetched successfully",
    statusCode: 200,
    data: allSemister,
  });
});

const getAcademicSemisterById = catchAsync(async (req, res) => {
  const semister = await academicSemisterSemisterService.getAcademicSemisterById(req.params.id);
  sendResponse(res, {
    success: true,
    message: "Academic semister fetched successfully",
    statusCode: 200,
    data: semister,
  });
});

const updateAcademicSemisterById = catchAsync(async (req, res) => {
  const updatedAcademicSemister = await academicSemisterSemisterService.updateAcademicSemisterById(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    success: true,
    message: "Academic semister updated successfully",
    statusCode: 200,
    data: updatedAcademicSemister,
  });
});

export const AcademicSemisterController = {
  createAcademicSemister,
  getAllAcademicSemister,
  getAcademicSemisterById,
  updateAcademicSemisterById,
};
