import mongoose from "mongoose";
import { Iguardian, IlocalGuardian, Istudent, IstudentName } from "./student.interface";

const studentNameSchema = new mongoose.Schema<IstudentName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const studentGuardianSchema = new mongoose.Schema<Iguardian>(
  {
    name: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      enam: ["father", "mother", "brother", "sister"],
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const studentLocalGuardianSchema = new mongoose.Schema<IlocalGuardian>(
  {
    name: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      enam: ["husband", "wife", "brother", "sister", "other"],
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const studentSchema = new mongoose.Schema<Istudent>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: studentNameSchema,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enam: ["male", "female"],
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    guardian: {
      type: studentGuardianSchema,
      required: true,
    },
    localGuardian: {
      type: studentLocalGuardianSchema,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    academicDepartment: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "AcademicDepartment",
      type: String,
      required: true,
    },
    academicSemister: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "accademicSemister",
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model<Istudent>("Student", studentSchema);
