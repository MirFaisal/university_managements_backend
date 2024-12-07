"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAcademicDepartmentZodSchema = exports.createAcademicDepartmentZodSchema = void 0;
const zod_1 = require("zod");
exports.createAcademicDepartmentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Title is required",
        }),
        academicFaculty: zod_1.z.string({
            required_error: "Academic faculty is required",
        }),
    }),
});
exports.updateAcademicDepartmentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        academicFaculty: zod_1.z.string().optional(),
    }),
});
