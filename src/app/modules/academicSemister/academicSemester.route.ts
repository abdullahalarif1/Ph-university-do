/* eslint-disable no-unused-vars */
import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemister.validation';

const router = express.Router();

// router theke controller e jawar jonno middleware --> validateRequest thamiaya kaj korbe

router.post('/create-academic-semester', validateRequest(AcademicSemesterValidation.creteAcademicSemesterValidationSchema), AcademicSemesterControllers.createAcademicSemester);

router.get('/', AcademicSemesterControllers.getAcademicSemester);

export const AcademicSemesterRoutes = router;


