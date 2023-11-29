import { NextFunction, Request, RequestHandler, Response } from 'express';

// try catch lagbe na ---> higher order function
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
