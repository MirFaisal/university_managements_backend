import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { StudentZodSchema } from "../student/student.valitade";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-student", validateRequest(StudentZodSchema), UserController.createUser);

export const userRouter = router;
