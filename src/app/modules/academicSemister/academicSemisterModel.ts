import { Schema, model } from 'mongoose';
import {
  Months,
  AcademicSemesterCodeSchema,
  AcademicSemesterNameSchema,
} from './academic.semester.constant';
import { TAcademicSemester } from './academicSemister.interface';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterNameSchema,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCodeSchema,
      required: true,
    },
    year: {
      type: String,
    },
    startMonth: {
      type: String,
      enum: Months,
    },
    endMonth: {
      type: String,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
);

// middleware --> checking is user exists?
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemesterExists) {
    throw new Error('Semester is already exists');
  }

  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
