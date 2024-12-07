"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middleware/validateRequest");
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const academicDepartment_validate_1 = require("./academicDepartment.validate");
const router = express_1.default.Router();
router.post("/create-department", (0, validateRequest_1.validateRequest)(academicDepartment_validate_1.createAcademicDepartmentZodSchema), academicDepartment_controller_1.createAcademicDepartment);
router.get("/get-all-department", academicDepartment_controller_1.getAllAcademicDepartment);
router.get("/get-department/:id", academicDepartment_controller_1.getAcademicDepartmentById);
router.patch("/update-department/:id", (0, validateRequest_1.validateRequest)(academicDepartment_validate_1.updateAcademicDepartmentZodSchema), academicDepartment_controller_1.updateAcademicDepartmentById);
router.delete("/delete-department/:id", academicDepartment_controller_1.deleteAcademicDepartmentById);
exports.academicDepartmentRouter = router;
