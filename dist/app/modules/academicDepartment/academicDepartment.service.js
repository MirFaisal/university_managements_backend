"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const appError_1 = __importDefault(require("../../utils/appError"));
const academicDepartment_model_1 = require("./academicDepartment.model");
/**
 * Creates a new academic department.
 */
const createAcademicDepartment = async (payload) => {
    const result = await academicDepartment_model_1.AcademicDepartment.create(payload);
    return result;
};
/**
 * Fetches all academic departments.
 */
const getAllAcademicDepartment = async () => {
    const result = await academicDepartment_model_1.AcademicDepartment.find({});
    return result;
};
/**
 * Fetches a single academic department by its id.
 */
const getAcademicDepartmentById = async (id) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new appError_1.default("Department id is not valid", 400);
    }
    const result = await academicDepartment_model_1.AcademicDepartment.findById(id);
    return result;
};
/**
 * Updates a single academic department by its id.
 */
const updateAcademicDepartmentById = async (id, payload) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new appError_1.default("Department id is not valid", 400);
    }
    const result = await academicDepartment_model_1.AcademicDepartment.findByIdAndUpdate(id, payload, { new: true });
    return result;
};
/**
 * Deletes a single academic department by its id.
 */
const deleteAcademicDepartmentById = async (id) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new appError_1.default("Department id is not valid", 400);
    }
    const result = await academicDepartment_model_1.AcademicDepartment.findOne({ _id: id });
    if (!result) {
        throw new appError_1.default("Department not found", 404);
    }
    result.isDeleted = true;
    const deletedAcademicDepartment = await result.save();
    return deletedAcademicDepartment;
};
exports.AcademicDepartmentService = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getAcademicDepartmentById,
    updateAcademicDepartmentById,
    deleteAcademicDepartmentById,
};
