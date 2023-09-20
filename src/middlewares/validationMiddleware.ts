import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

function validateReq(req: Request, res: Response) {
  const resault = validationResult(req);
  if (!resault.isEmpty()) {
    const errors = resault.array();
    const errorMessages: string[] = [];
    errors.forEach((error) => errorMessages.push(error.msg));
    res.status(400).json({
      message: "The entered information is invalid.",
      errors: errorMessages,
    });
    return false;
  } else {
    return true;
  }
}

export function validate(req: Request, res: Response, next: NextFunction) {
  if (validateReq(req, res)) {
    return next();
  } else {
    return;
  }
}
