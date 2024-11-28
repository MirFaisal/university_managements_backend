"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSchema = void 0;
const zod_1 = require("zod");
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
exports.StudentSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "Student ID is required"),
    user: zod_1.z.string().min(1, "User ID is required"), // Validated as a string, e.g., ObjectId
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
});
