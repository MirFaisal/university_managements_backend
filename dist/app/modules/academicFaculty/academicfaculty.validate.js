"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAcademicFacultyZodSchema = exports.createAcademicFacultyZodSchema = void 0;
const zod_1 = require("zod");
exports.createAcademicFacultyZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
    }),
});
exports.updateAcademicFacultyZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
    }),
});
