"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemisterSemisterService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const appError_1 = __importDefault(require("../../utils/appError"));
const academicSemister_model_1 = require("./academicSemister.model");
const createAcademicSemister = async (payload) => {
    const newSemister = await academicSemister_model_1.AcademicSemister.create(payload);
    return newSemister;
};
const getAllAcademicSemister = async () => {
    const allSemister = await academicSemister_model_1.AcademicSemister.find({});
    return allSemister;
};
const getAcademicSemisterById = async (id) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        new appError_1.default("Semister id is not valid", 400);
    }
    const semister = await academicSemister_model_1.AcademicSemister.findById(id);
    return semister;
};
const updateAcademicSemisterById = async (id, payload) => {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        new appError_1.default("Semister id is not valid", 400);
    }
    const isExist = await academicSemister_model_1.AcademicSemister.findOne({
        _id: id,
        $and: [{ name: payload.name }, { year: payload.year }],
    });
    if (isExist) {
        throw new appError_1.default("Semister already exist", 400);
    }
    const updatedAcademicSemister = await academicSemister_model_1.AcademicSemister.findByIdAndUpdate(id, payload, { new: true });
    return updatedAcademicSemister;
};
exports.academicSemisterSemisterService = {
    createAcademicSemister,
    getAllAcademicSemister,
    getAcademicSemisterById,
    updateAcademicSemisterById,
};
