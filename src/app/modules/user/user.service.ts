import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemester } from '../academicSemister/academicSemisterModel';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  if (!admissionSemester) {
    throw new Error('Admission Semester not found');
  }

  // transaction policy
  const session = await mongoose.startSession();

  try {
    // transaction policy
    session.startTransaction();
    //set manually generated it
    // userData.id = '2030100001';

    //set generate id dynamically
    userData.id = await generateStudentId(admissionSemester);

    // create a User ( transaction-1 ) --------------------->
    const newUser = await User.create([userData], { session }); // array

    //create a student
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    // set id , _id as user --> transaction policy
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a Student ( transaction-2 ) ----------------------->
    const newStudent = await Student.create([payload], { session });

    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Student');
    }

    // last process --> transaction policy
    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    // last process --> transaction policy for error
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create User');
  }
};

export const UserServices = {
  createStudentIntoDB,
};
