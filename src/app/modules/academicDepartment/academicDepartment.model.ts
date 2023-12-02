import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'academicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

// middleware
academicDepartmentSchema.pre('save', async function (next) {
  const isNameExists = await AcademicDepartment.findOne({ name: this.name });
  if (isNameExists) {
    throw new Error('This name already exists');
  }
  next();
});

// data null thakle error message successfully dekhabe na.
academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isUserExists = await AcademicDepartment.findOne(query);
  if (isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, "This department is already exists");
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
