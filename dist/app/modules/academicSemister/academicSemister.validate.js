"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAcademicSemisterZodSchema = exports.academicSemisterZodSchema = void 0;
const zod_1 = require("zod");
const academicSemister_constant_1 = require("./academicSemister.constant");
exports.academicSemisterZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.nativeEnum(academicSemister_constant_1.AcademicSemisterName).refine((value) => {
            return Object.values(academicSemister_constant_1.AcademicSemisterName).includes(value);
        }),
        year: zod_1.z.string({
            message: "Academic semister year is required",
        }),
        code: zod_1.z.nativeEnum(academicSemister_constant_1.AcademicSemisterCode).refine((value) => {
            return Object.values(academicSemister_constant_1.AcademicSemisterCode).includes(value);
        }),
        startMonth: zod_1.z.nativeEnum(academicSemister_constant_1.AcademicSemisterMonths).refine((value) => {
            return Object.values(academicSemister_constant_1.AcademicSemisterMonths).includes(value);
        }),
        endMonth: zod_1.z.nativeEnum(academicSemister_constant_1.AcademicSemisterMonths).refine((value) => {
            return Object.values(academicSemister_constant_1.AcademicSemisterMonths).includes(value);
        }),
    }),
});
exports.updateAcademicSemisterZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .nativeEnum(academicSemister_constant_1.AcademicSemisterName)
            .refine((value) => {
            return Object.values(academicSemister_constant_1.AcademicSemisterName).includes(value);
        })
            .optional(),
        year: zod_1.z
            .string({
            message: "Academic semister year is required",
        })
            .date()
            .optional(),
        code: zod_1.z
            .nativeEnum(academicSemister_constant_1.AcademicSemisterCode)
            .refine((value) => {
            return Object.values(academicSemister_constant_1.AcademicSemisterCode).includes(value);
        })
            .optional(),
        startMonth: zod_1.z
            .nativeEnum(academicSemister_constant_1.AcademicSemisterMonths)
            .refine((value) => {
            return Object.values(academicSemister_constant_1.AcademicSemisterMonths).includes(value);
        })
            .optional(),
        endMonth: zod_1.z
            .nativeEnum(academicSemister_constant_1.AcademicSemisterMonths)
            .refine((value) => {
            return Object.values(academicSemister_constant_1.AcademicSemisterMonths).includes(value);
        })
            .optional(),
    }),
});
