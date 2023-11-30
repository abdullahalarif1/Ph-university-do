import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

//create
const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

//get
const getAcademicFacultiesFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

//get single
const getSingleAcademicFacultyFromDB = async (_id: string) => {
  const result = await AcademicFaculty.findOne({ _id });
  return result;
};

//update
const updateAcademicFacultyIntoDB = async (
  _id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyServices = {
  getAcademicFacultiesFromDB,
  createAcademicFacultyIntoDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
