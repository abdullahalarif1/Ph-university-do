import { academicSemesterNameCodeMapper } from './academic.semester.constant';
import { TAcademicSemester } from './academicSemister.interface';
import { AcademicSemester } from './academicSemisterModel';

//create
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('invalid semester code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

//get
const getAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

//get single
const getSingleAcademicSemesterFromDB = async (_id: string) => {
  const result = await AcademicSemester.findOne({ _id });
  return result;
};

//update
const updateAcademicSemesterIntoDB = async ( _id: string, payload: Partial<TAcademicSemester>) => {

     if (
       payload.name &&
       payload.code &&
       academicSemesterNameCodeMapper[payload.name] !== payload.code
     ) {
       throw new Error('Invalid Semester Code');
     }


  const result = await AcademicSemester.findOneAndUpdate({ _id }, payload, { new: true });
  return result;
};

export const AcademicSemesterServices = {
  getAcademicSemesterFromDB,
  createAcademicSemesterIntoDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
