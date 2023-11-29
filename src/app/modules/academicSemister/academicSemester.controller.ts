import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import {
  AcademicSemesterServices,
} from './academicService';

const createAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;

  // validation hocceh route ei tai direct diye disi eikhane lagbe na
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  });
});


const getAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;

  // validation hocceh route ei tai direct diye disi eikhane lagbe na
  const result = await AcademicSemesterServices.getAcademicSemesterFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Getting Academic Semester is successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemester,
};
