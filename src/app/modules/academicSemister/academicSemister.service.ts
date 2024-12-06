import mongoose from "mongoose";
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
    throw new Error("Semister id is not valid");
  }

  const semister = await AcademicSemister.findById(id);
  return semister;
};

const updateAcademicSemisterById = async (id: string, payload: Partial<IAcademicSemister>) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Semister id is not valid");
  }

  const isExist = await AcademicSemister.findOne({
    _id: id,
    $and: [{ name: payload.name }, { year: payload.year }],
  });

  if (isExist) {
    throw new Error("Semister already exist");
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
