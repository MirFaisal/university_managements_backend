import { z } from "zod";
import {
  AcademicSemisterCode,
  AcademicSemisterMonths,
  AcademicSemisterName,
} from "./academicSemister.constant";

export const academicSemisterZodSchema = z.object({
  body: z.object({
    name: z.nativeEnum(AcademicSemisterName).refine((value) => {
      return Object.values(AcademicSemisterName).includes(value);
    }),
    year: z.string({
      message: "Academic semister year is required",
    }),
    code: z.nativeEnum(AcademicSemisterCode).refine((value) => {
      return Object.values(AcademicSemisterCode).includes(value);
    }),

    startMonth: z.nativeEnum(AcademicSemisterMonths).refine((value) => {
      return Object.values(AcademicSemisterMonths).includes(value);
    }),

    endMonth: z.nativeEnum(AcademicSemisterMonths).refine((value) => {
      return Object.values(AcademicSemisterMonths).includes(value);
    }),
  }),
});

export const updateAcademicSemisterZodSchema = z.object({
  body: z.object({
    name: z
      .nativeEnum(AcademicSemisterName)
      .refine((value) => {
        return Object.values(AcademicSemisterName).includes(value);
      })
      .optional(),
    year: z
      .string({
        message: "Academic semister year is required",
      })
      .date()
      .optional(),
    code: z
      .nativeEnum(AcademicSemisterCode)
      .refine((value) => {
        return Object.values(AcademicSemisterCode).includes(value);
      })
      .optional(),

    startMonth: z
      .nativeEnum(AcademicSemisterMonths)
      .refine((value) => {
        return Object.values(AcademicSemisterMonths).includes(value);
      })
      .optional(),

    endMonth: z
      .nativeEnum(AcademicSemisterMonths)
      .refine((value) => {
        return Object.values(AcademicSemisterMonths).includes(value);
      })
      .optional(),
  }),
});
