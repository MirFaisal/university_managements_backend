import mongoose from "mongoose";
import { IacademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.mode";

const createAcademicFaculty = async (payload: IacademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFaculty = async () => {
  const result = await AcademicFaculty.find({});
  return result;
};

const getAcademicFacultyById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Semister id is not valid");
  }

  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyById = async (id: string, payload: Partial<IacademicFaculty>) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Semister id is not valid");
  }

  const result = await AcademicFaculty.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteAcademicFacultyById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Semister id is not valid");
  }

  const result = await AcademicFaculty.findOne({ _id: id });
  if (!result) {
    throw new Error("Semister not found");
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
