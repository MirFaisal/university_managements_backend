"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const user_service_1 = require("./user.service");
const createUser = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { password, student } = req.body;
    const newStudent = await user_service_1.UserService.createstudent(password, student);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "User created successfully",
        data: newStudent,
    });
});
exports.UserController = {
    createUser,
};
