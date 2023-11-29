import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

// higher order function --> data pass  korte hole eivabe korte hbe
const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation
      await schema.parseAsync({
        // pura project er body te validation kora
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
