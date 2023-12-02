import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

//create
const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

//get
const getAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty'); // show data with id
  return result;
};

//get single
const getSingleAcademicDepartmentFromDB = async (_id: string) => {
  const result = await AcademicDepartment.findOne({ _id }).populate(
    'academicFaculty',
  );
  return result;
};

//update
const updateAcademicDepartmentIntoDB = async (
  _id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentServices = {
  getAcademicDepartmentsFromDB,
  createAcademicDepartmentIntoDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
