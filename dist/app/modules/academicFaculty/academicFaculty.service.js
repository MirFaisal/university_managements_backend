"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const academicFaculty_mode_1 = require("./academicFaculty.mode");
const appError_1 = __importDefault(require("../../utils/appError"));
const createAcademicFaculty = async (payload) => {
    const result = await academicFaculty_mode_1.AcademicFaculty.create(payload);
    return result;
};
const getAllAcademicFaculty = async () => {
    const result = await academicFaculty_mode_1.AcademicFaculty.find({});
    return result;
};
const getAcademicFacultyById = async (id) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new appError_1.default("Semister id is not valid", 400);
    }
    const result = await academicFaculty_mode_1.AcademicFaculty.findById(id);
    return result;
};
const updateAcademicFacultyById = async (id, payload) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new appError_1.default("Semister id is not valid", 400);
    }
    const result = await academicFaculty_mode_1.AcademicFaculty.findByIdAndUpdate(id, payload, { new: true });
    return result;
};
const deleteAcademicFacultyById = async (id) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new appError_1.default("Semister id is not valid", 400);
    }
    const result = await academicFaculty_mode_1.AcademicFaculty.findOne({ _id: id });
    if (!result) {
        throw new appError_1.default("Semister not found", 404);
    }
    result.isDeleted = true;
    const deletedAcademicFaculty = await result.save();
    return deletedAcademicFaculty;
};
exports.AcademicFacultyService = {
    createAcademicFaculty,
    getAllAcademicFaculty,
    getAcademicFacultyById,
    updateAcademicFacultyById,
    deleteAcademicFacultyById,
};
