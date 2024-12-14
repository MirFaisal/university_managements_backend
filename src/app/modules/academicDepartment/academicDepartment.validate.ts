import { z } from "zod";

export const createAcademicDepartmentZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    academicFaculty: z.string({
      required_error: "Academic faculty is required",
    }),
  }),
});

export const updateAcademicDepartmentZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    academicFaculty: z.string().optional(),
  }),
});
