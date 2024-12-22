import mongoose from "mongoose";
import { z } from "zod";

const nameZodSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
});

const GuardianZodSchema = z.object({
  name: z.string().min(1, "Guardian name is required"),
  relationship: z.enum(["father", "mother", "brother", "sister"]),
  contactNo: z.string().min(1, "Guardian contact number is required"),
  address: z.string().min(1, "Guardian address is required"),
});

const LocalGuardianZodSchema = z.object({
  name: z.string().min(1, "Local guardian name is required"),
  relationship: z.enum(["husband", "wife", "brother", "sister", "other"]),
  contactNo: z.string().min(1, "Local guardian contact number is required"),
  address: z.string().min(1, "Local guardian address is required"),
});

export const StudentZodSchema = z.object({
  body: z.object({
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(32, { message: "Password must be at most 32 characters" })
      .optional(),

    student: z.object({
      name: nameZodSchema,
      gender: z.enum(["male", "female"]),
      dateOfBirth: z.preprocess(
        (arg) => {
          if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
        },
        z.date().refine((date) => !isNaN(date.getTime()), "Invalid date format")
      ),
      email: z.string().email("Invalid email format"),
      contactNo: z.string().min(1, "Contact number is required"),
      emergencyContactNo: z.string().min(1, "Emergency contact number is required"),
      guardian: GuardianZodSchema,
      localGuardian: LocalGuardianZodSchema,
      presentAddress: z.string().min(1, "Present address is required"),
      permanentAddress: z.string().min(1, "Permanent address is required"),
      profileImage: z.string().min(1, "Profile image is required"),
      academicDepartment: z.string().min(1, "Academic department is required"),
      academicSemister: z
        .string({ message: "Academic semister is required" })
        .refine((value) => mongoose.Types.ObjectId.isValid(value), {
          message: "Invalid academic semister",
        }),
    }),
  }),
});

//update
const nameZodUpdateSchema = z.object({
  firstName: z.string().min(1, "First name is required").optional(),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required").optional(),
});

const GuardianZodUpdateSchema = z.object({
  name: z.string().min(1, "Guardian name is required").optional(),
  relationship: z.enum(["father", "mother", "brother", "sister"]).optional(),
  contactNo: z.string().min(1, "Guardian contact number is required").optional(),
  address: z.string().min(1, "Guardian address is required").optional(),
});

const LocalGuardianZodUpdateSchema = z.object({
  name: z.string().min(1, "Local guardian name is required").optional(),
  relationship: z.enum(["husband", "wife", "brother", "sister", "other"]).optional(),
  contactNo: z.string().min(1, "Local guardian contact number is required").optional(),
  address: z.string().min(1, "Local guardian address is required").optional(),
});

export const StudentZodUpdateSchema = z.object({
  body: z.object({
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(32, { message: "Password must be at most 32 characters" })
      .optional(),

    student: z.object({
      name: nameZodUpdateSchema,
      gender: z.enum(["male", "female"]).optional(),
      dateOfBirth: z
        .preprocess(
          (arg) => {
            if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
          },
          z.date().refine((date) => !isNaN(date.getTime()), "Invalid date format")
        )
        .optional(),
      email: z.string().email("Invalid email format").optional(),
      contactNo: z.string().min(1, "Contact number is required").optional(),
      emergencyContactNo: z.string().min(1, "Emergency contact number is required").optional(),
      guardian: GuardianZodUpdateSchema,
      localGuardian: LocalGuardianZodUpdateSchema,
      presentAddress: z.string().min(1, "Present address is required").optional(),
      permanentAddress: z.string().min(1, "Permanent address is required").optional(),
      profileImage: z.string().min(1, "Profile image is required").optional(),
      academicDepartment: z.string().min(1, "Academic department is required").optional(),
      academicSemister: z
        .string({ message: "Academic semister is required" })
        .refine((value) => mongoose.Types.ObjectId.isValid(value), {
          message: "Invalid academic semister",
        })
        .optional(),
    }),
  }),
});
