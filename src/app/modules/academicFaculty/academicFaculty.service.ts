import mongoose from "mongoose";
import { IAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.mode";
import AppError from "../../utils/appError";

const createAcademicFaculty = async (payload: IAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFaculty = async () => {
  const result = await AcademicFaculty.find({});
  return result;
};

const getAcademicFacultyById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Semister id is not valid", 400);
  }

  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyById = async (id: string, payload: Partial<IAcademicFaculty>) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Semister id is not valid", 400);
  }

  const result = await AcademicFaculty.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteAcademicFacultyById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Semister id is not valid", 400);
  }

  const result = await AcademicFaculty.findOne({ _id: id });
  if (!result) {
    throw new AppError("Semister not found", 404);
  }

  result.isDeleted = true;
  const deletedAcademicFaculty = await result.save();
  return deletedAcademicFaculty;
};

export const AcademicFacultyService = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getAcademicFacultyById,
  updateAcademicFacultyById,
  deleteAcademicFacultyById,
};
