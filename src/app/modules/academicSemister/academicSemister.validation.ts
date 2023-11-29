import { z } from 'zod';
import {
  AcademicSemesterCodeSchema,
  AcademicSemesterNameSchema,
  Months,
} from './academic.semester.constant';

const creteAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterNameSchema] as [string, ...string[]]),
    code: z.enum([...AcademicSemesterCodeSchema] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const AcademicSemesterValidation = {
  creteAcademicSemesterValidationSchema,
};
