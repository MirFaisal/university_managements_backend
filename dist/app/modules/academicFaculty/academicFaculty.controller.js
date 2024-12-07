"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAcademicFacultyById = exports.updateAcademicFacultyById = exports.getAcademicFacultyById = exports.getAllAcademicFaculty = exports.createAcademicFaculty = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const academicFaculty_service_1 = require("./academicFaculty.service");
exports.createAcademicFaculty = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicFaculty_service_1.AcademicFacultyService.createAcademicFaculty(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Faculty created successfully",
        data: result,
    });
});
exports.getAllAcademicFaculty = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicFaculty_service_1.AcademicFacultyService.getAllAcademicFaculty();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Faculty fetched successfully",
        data: result,
    });
});
exports.getAcademicFacultyById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicFaculty_service_1.AcademicFacultyService.getAcademicFacultyById(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Faculty fetched successfully",
        data: result,
    });
});
exports.updateAcademicFacultyById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicFaculty_service_1.AcademicFacultyService.updateAcademicFacultyById(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Faculty updated successfully",
        data: result,
    });
});
exports.deleteAcademicFacultyById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicFaculty_service_1.AcademicFacultyService.deleteAcademicFacultyById(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Faculty deleted successfully",
        data: result,
    });
});
