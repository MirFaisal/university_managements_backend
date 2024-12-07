"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAcademicDepartmentById = exports.updateAcademicDepartmentById = exports.getAcademicDepartmentById = exports.getAllAcademicDepartment = exports.createAcademicDepartment = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const academicDepartment_service_1 = require("./academicDepartment.service");
/**
 * Creates a new academic department.
 */
exports.createAcademicDepartment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicDepartment_service_1.AcademicDepartmentService.createAcademicDepartment(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Department created successfully",
        data: result,
    });
});
/**
 * Fetches all academic departments.
 */
exports.getAllAcademicDepartment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicDepartment_service_1.AcademicDepartmentService.getAllAcademicDepartment();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Department fetched successfully",
        data: result,
    });
});
/**
 * Fetches a single academic department by its id.
 */
exports.getAcademicDepartmentById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicDepartment_service_1.AcademicDepartmentService.getAcademicDepartmentById(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Department fetched successfully",
        data: result,
    });
});
/**
 * Updates a single academic department by its id.
 */
exports.updateAcademicDepartmentById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicDepartment_service_1.AcademicDepartmentService.updateAcademicDepartmentById(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Department updated successfully",
        data: result,
    });
});
/**
 * Deletes a single academic department by its id.
 */
exports.deleteAcademicDepartmentById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await academicDepartment_service_1.AcademicDepartmentService.deleteAcademicDepartmentById(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Academic Department deleted successfully",
        data: result,
    });
});
