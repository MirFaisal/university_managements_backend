import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { deleteStudent, getAllStudent, getSpecificStudent, updateStudent } from "./student.controller";
import { StudentZodUpdateSchema } from "./student.valitade";
const router = express.Router();

router.get("/get-all-students", getAllStudent);
router.get("/get-student/:id", getSpecificStudent);
router.patch("/update-student/:id", validateRequest(StudentZodUpdateSchema), updateStudent);
router.delete("/delete-student/:id", deleteStudent);

export const studentRouter = router;
