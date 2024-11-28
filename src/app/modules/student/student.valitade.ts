import { z } from "zod";

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

export const StudentSchema = z.object({
  id: z.string().min(1, "Student ID is required"),
  user: z.string().min(1, "User ID is required"), // Validated as a string, e.g., ObjectId
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
});
