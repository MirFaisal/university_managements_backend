import mongoose from "mongoose";

import AppError from "../../utils/appError";
import { IAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

/**
 * Creates a new academic department.
 */
const createAcademicDepartment = async (payload: IAcademicDepartment): Promise<IAcademicDepartment> => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

/**
 * Fetches all academic departments.
 */
const getAllAcademicDepartment = async (): Promise<IAcademicDepartment[]> => {
  const result = await AcademicDepartment.find({});
  return result;
};

/**
 * Fetches a single academic department by its id.
 */
const getAcademicDepartmentById = async (id: string): Promise<IAcademicDepartment | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Department id is not valid", 400);
  }

  const result = await AcademicDepartment.findById(id);
  return result;
};

/**
 * Updates a single academic department by its id.
 */
const updateAcademicDepartmentById = async (
  id: string,
  payload: Partial<IAcademicDepartment>
): Promise<IAcademicDepartment | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Department id is not valid", 400);
  }
  const result = await AcademicDepartment.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

/**
 * Deletes a single academic department by its id.
 */
const deleteAcademicDepartmentById = async (id: string): Promise<IAcademicDepartment> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Department id is not valid", 400);
  }
  const result = await AcademicDepartment.findOne({ _id: id });
  if (!result) {
    throw new AppError("Department not found", 404);
  }
  result.isDeleted = true;
  const deletedAcademicDepartment = await result.save();
  return deletedAcademicDepartment;
};

export const AcademicDepartmentService = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getAcademicDepartmentById,
  updateAcademicDepartmentById,
  deleteAcademicDepartmentById,
};
