import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TAcademicSemesterNameCodeMapper,
  TMonth,
} from './academicSemister.interface';

export const Months: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterNameSchema: TAcademicSemesterName[] = [
  'Autumn',
  'Summer',
  'Fail',
];
export const AcademicSemesterCodeSchema: TAcademicSemesterCode[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterNameCodeValidation: TAcademicSemesterNameCodeMapper =
  {
    Autumn: '01',
    Summer: '02',
    Fail: '03',
  };
