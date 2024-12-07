"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemisterRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middleware/validateRequest");
const academicSemister_controller_1 = require("./academicSemister.controller");
const academicSemister_validate_1 = require("./academicSemister.validate");
const router = express_1.default.Router();
router.get("/get-all-academic-semister", academicSemister_controller_1.AcademicSemisterController.getAllAcademicSemister);
router.post("/create-acadenic-semister", (0, validateRequest_1.validateRequest)(academicSemister_validate_1.academicSemisterZodSchema), academicSemister_controller_1.AcademicSemisterController.createAcademicSemister);
router.get("/get-academic-semister/:id", academicSemister_controller_1.AcademicSemisterController.getAcademicSemisterById);
router.patch("/update-academic-semister/:id/", (0, validateRequest_1.validateRequest)(academicSemister_validate_1.updateAcademicSemisterZodSchema), academicSemister_controller_1.AcademicSemisterController.updateAcademicSemisterById);
exports.academicSemisterRouter = router;
