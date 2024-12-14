import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createAcademicDepartment,
  deleteAcademicDepartmentById,
  getAcademicDepartmentById,
  getAllAcademicDepartment,
  updateAcademicDepartmentById,
} from "./academicDepartment.controller";
import { createAcademicDepartmentZodSchema, updateAcademicDepartmentZodSchema } from "./academicDepartment.validate";

const router = express.Router();

router.post(
  "/create-department",
  validateRequest(createAcademicDepartmentZodSchema),
  createAcademicDepartment
);

router.get("/get-all-department", getAllAcademicDepartment);

router.get("/get-department/:id", getAcademicDepartmentById);

router.patch(
  "/update-department/:id",
  validateRequest(updateAcademicDepartmentZodSchema),
  updateAcademicDepartmentById
);

router.delete("/delete-department/:id", deleteAcademicDepartmentById);

export const academicDepartmentRouter = router;
