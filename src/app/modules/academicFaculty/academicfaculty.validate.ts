import { z } from "zod";

export const createAcademicFacultyZodSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

export const updateAcademicFacultyZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});
