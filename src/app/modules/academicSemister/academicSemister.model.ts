/* eslint-disable no-use-before-define */
import mongoose from "mongoose";
import { code, months, monthWithNumber } from "./academicSemister.constant";
import { IAcademicSemister } from "./academicSemister.interface";

const academicSemisterSchema = new mongoose.Schema<IAcademicSemister>(
  {
    name: { type: String, enam: ["Autumn", "Summer", "Fall"], required: true },
    year: { type: String, required: true },
    code: { type: String, enum: ["01", "02", "03"], required: true },
    startMonth: { type: String, enum: months, required: true },
    endMonth: { type: String, enum: months, required: true },
  },
  { timestamps: true }
);

academicSemisterSchema.pre("save", async function (next) {
  const isExist = await AcademicSemister.findOne({
    name: this.name,
    year: this.year,
  });
  if (isExist) {
    throw new Error("Academic semister already exist");
  }

  if (monthWithNumber[this.startMonth] >= monthWithNumber[this.endMonth]) {
    throw new Error("Start month should be less than end month");
  }

  if (code[this.name] !== this.code) {
    throw new Error("Invalid semister code");
  }

  next();
});

export const AcademicSemister = mongoose.model<IAcademicSemister>("AcademicSemister", academicSemisterSchema);
