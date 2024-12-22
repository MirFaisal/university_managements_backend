"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config"));
const appError_1 = __importDefault(require("../../utils/appError"));
const generateStudenId_1 = require("../../utils/generateStudenId");
const academicSemister_model_1 = require("../academicSemister/academicSemister.model");
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const createstudent = async (password, studentData) => {
    const user = {};
    const academicSemister = await academicSemister_model_1.AcademicSemister.findOne({
        _id: studentData.academicSemister,
    });
    user.password = password || config_1.default.defaultStudentPassword;
    user.id = await (0, generateStudenId_1.generateStudentId)(academicSemister);
    user.role = "student";
    const session = await mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const newUser = await user_model_1.User.create([user], { session });
        if (!newUser.length) {
            throw new appError_1.default("Failed to create user", 400);
        }
        studentData.user = newUser[0]._id;
        studentData.id = newUser[0].id;
        const newStudent = await student_model_1.Student.create([studentData], { session });
        if (!newStudent.length) {
            throw new appError_1.default("Failed to create student", 400);
        }
        await session.commitTransaction();
        return newStudent;
    }
    catch (error) {
        await session.abortTransaction();
        throw new appError_1.default("Failed to create user and student", 400);
    }
    finally {
        await session.endSession();
    }
};
exports.UserService = {
    createstudent,
};
