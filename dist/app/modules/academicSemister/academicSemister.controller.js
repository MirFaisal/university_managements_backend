"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemisterController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const academicSemister_service_1 = require("./academicSemister.service");
const createAcademicSemister = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const newSemister = await academicSemister_service_1.academicSemisterSemisterService.createAcademicSemister(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        message: "Academic semister created successfully",
        statusCode: 200,
        success: true,
        data: newSemister,
    });
});
const getAllAcademicSemister = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const allSemister = await academicSemister_service_1.academicSemisterSemisterService.getAllAcademicSemister();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Academic semister fetched successfully",
        statusCode: 200,
        data: allSemister,
    });
});
const getAcademicSemisterById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const semister = await academicSemister_service_1.academicSemisterSemisterService.getAcademicSemisterById(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Academic semister fetched successfully",
        statusCode: 200,
        data: semister,
    });
});
const updateAcademicSemisterById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const updatedAcademicSemister = await academicSemister_service_1.academicSemisterSemisterService.updateAcademicSemisterById(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Academic semister updated successfully",
        statusCode: 200,
        data: updatedAcademicSemister,
    });
});
exports.AcademicSemisterController = {
    createAcademicSemister,
    getAllAcademicSemister,
    getAcademicSemisterById,
    updateAcademicSemisterById,
};
