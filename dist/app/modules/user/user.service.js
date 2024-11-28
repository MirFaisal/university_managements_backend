"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const config_1 = __importDefault(require("../../config"));
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const createstudent = async (password, studentData) => {
    const user = {};
    user.password = password || config_1.default.defaultStudentPassword;
    user.id = "20230033";
    user.role = "student";
    const newUser = await user_model_1.User.create(user);
    if (Object.keys(newUser).length) {
        studentData.user = newUser._id;
        studentData.id = newUser.id;
        const newStudent = await student_model_1.Student.create(studentData);
        return newStudent;
    }
};
exports.UserService = {
    createstudent,
};
