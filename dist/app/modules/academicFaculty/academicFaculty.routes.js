"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middleware/validateRequest");
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const academicfaculty_validate_1 = require("./academicfaculty.validate");
const router = express_1.default.Router();
router.post("/create-faculty", (0, validateRequest_1.validateRequest)(academicfaculty_validate_1.createAcademicFacultyZodSchema), academicFaculty_controller_1.createAcademicFaculty);
router.get("/get-all-faculty", academicFaculty_controller_1.getAllAcademicFaculty);
router.get("/get-faculty/:id", academicFaculty_controller_1.getAcademicFacultyById);
router.patch("/update-faculty/:id", (0, validateRequest_1.validateRequest)(academicfaculty_validate_1.updateAcademicFacultyZodSchema), academicFaculty_controller_1.updateAcademicFacultyById);
router.delete("/delete-faculty/:id", academicFaculty_controller_1.deleteAcademicFacultyById);
exports.academicFacultyRouter = router;
