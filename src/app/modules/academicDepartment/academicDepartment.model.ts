import mongoose from "mongoose";
import { IAcademicDepartment } from "./academicDepartment.interface";

const academicDepartmentSchema = new mongoose.Schema<IAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AcademicFaculty",
      required: true,
    },
    isAcive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const AcademicDepartment = mongoose.model<IAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema
);
