import { academicSemesterNameCodeValidation } from './academic.semester.constant';
import { TAcademicSemester } from './academicSemister.interface';
import { AcademicSemester } from './academicSemisterModel';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeValidation[payload.name] !== payload.code) {
    throw new Error('invalid semester code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

export const AcademicSemesterServices = {
  getAcademicSemesterFromDB,
  createAcademicSemesterIntoDB,
};
