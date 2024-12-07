import mongoose from "mongoose";
import AppError from "../../utils/appError";
import { IAcademicSemister } from "./academicSemister.interface";
import { AcademicSemister } from "./academicSemister.model";

const createAcademicSemister = async (payload: IAcademicSemister) => {
  const newSemister = await AcademicSemister.create(payload);
  return newSemister;
};

const getAllAcademicSemister = async () => {
  const allSemister = await AcademicSemister.find({});
  return allSemister;
};

const getAcademicSemisterById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    new AppError("Semister id is not valid", 400);
  }

  const semister = await AcademicSemister.findById(id);
  return semister;
};

const updateAcademicSemisterById = async (id: string, payload: Partial<IAcademicSemister>) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    new AppError("Semister id is not valid", 400);
  }

  const isExist = await AcademicSemister.findOne({
    _id: id,
    $and: [{ name: payload.name }, { year: payload.year }],
  });

  if (isExist) {
    throw new AppError("Semister already exist", 400);
  }

  const updatedAcademicSemister = await AcademicSemister.findByIdAndUpdate(id, payload, { new: true });
  return updatedAcademicSemister;
};

export const academicSemisterSemisterService = {
  createAcademicSemister,
  getAllAcademicSemister,
  getAcademicSemisterById,
  updateAcademicSemisterById,
};
