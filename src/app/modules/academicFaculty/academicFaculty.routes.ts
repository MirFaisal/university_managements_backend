import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createAcademicFaculty,
  deleteAcademicFacultyById,
  getAcademicFacultyById,
  getAllAcademicFaculty,
  updateAcademicFacultyById,
} from "./academicFaculty.controller";
import { createAcademicFacultyZodSchema, updateAcademicFacultyZodSchema } from "./academicfaculty.validate";

const router = express.Router();

router.post("/create-faculty", validateRequest(createAcademicFacultyZodSchema), createAcademicFaculty);

router.get("/get-all-faculty", getAllAcademicFaculty);

router.get("/get-faculty/:id", getAcademicFacultyById);

router.patch(
  "/update-faculty/:id",
  validateRequest(updateAcademicFacultyZodSchema),
  updateAcademicFacultyById
);

router.delete("/delete-faculty/:id", deleteAcademicFacultyById);

export const academicFacultyRouter = router;
