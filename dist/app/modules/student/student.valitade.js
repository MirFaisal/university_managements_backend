"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentZodSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
const nameZodSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, "First name is required"),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().min(1, "Last name is required"),
});
const GuardianZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Guardian name is required"),
    relationship: zod_1.z.enum(["father", "mother", "brother", "sister"]),
    contactNo: zod_1.z.string().min(1, "Guardian contact number is required"),
    address: zod_1.z.string().min(1, "Guardian address is required"),
});
const LocalGuardianZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Local guardian name is required"),
    relationship: zod_1.z.enum(["husband", "wife", "brother", "sister", "other"]),
    contactNo: zod_1.z.string().min(1, "Local guardian contact number is required"),
    address: zod_1.z.string().min(1, "Local guardian address is required"),
});
exports.StudentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z
            .string({
            required_error: "Password is required",
        })
            .min(8, { message: "Password must be at least 8 characters" })
            .max(32, { message: "Password must be at most 32 characters" })
            .optional(),
        student: zod_1.z.object({
            name: nameZodSchema,
            gender: zod_1.z.enum(["male", "female"]),
            dateOfBirth: zod_1.z.preprocess((arg) => {
                if (typeof arg === "string" || arg instanceof Date)
                    return new Date(arg);
            }, zod_1.z.date().refine((date) => !isNaN(date.getTime()), "Invalid date format")),
            email: zod_1.z.string().email("Invalid email format"),
            contactNo: zod_1.z.string().min(1, "Contact number is required"),
            emergencyContactNo: zod_1.z.string().min(1, "Emergency contact number is required"),
            guardian: GuardianZodSchema,
            localGuardian: LocalGuardianZodSchema,
            presentAddress: zod_1.z.string().min(1, "Present address is required"),
            permanentAddress: zod_1.z.string().min(1, "Permanent address is required"),
            profileImage: zod_1.z.string().min(1, "Profile image is required"),
            academicDepartment: zod_1.z.string().min(1, "Academic department is required"),
            academicSemister: zod_1.z
                .string({ message: "Academic semister is required" })
                .refine((value) => mongoose_1.default.Types.ObjectId.isValid(value), {
                message: "Invalid academic semister",
            }),
        }),
    }),
});
