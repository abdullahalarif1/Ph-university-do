import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
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
    throw new Error("This user doesn't exists");
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
