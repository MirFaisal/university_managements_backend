import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { AcademicSemisterController } from "./academicSemister.controller";
import { academicSemisterZodSchema, updateAcademicSemisterZodSchema } from "./academicSemister.validate";
const router = express.Router();

router.get("/get-all-academic-semister", AcademicSemisterController.getAllAcademicSemister);

router.post(
  "/create-acadenic-semister",
  validateRequest(academicSemisterZodSchema),
  AcademicSemisterController.createAcademicSemister
);

router.get("/get-academic-semister/:id", AcademicSemisterController.getAcademicSemisterById);

router.patch(
  "/update-academic-semister/:id/",
  validateRequest(updateAcademicSemisterZodSchema),
  AcademicSemisterController.updateAcademicSemisterById
);

export const academicSemisterRouter = router;
