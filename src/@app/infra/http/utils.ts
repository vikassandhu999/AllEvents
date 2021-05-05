import { NextFunction, Request, Response } from 'express';
import { BaseError } from '@app/core/BaseError';
import { ApiError } from '@app/core/ApiError';
import { AppError } from '@app/core/AppError';

export const handleExpressErrors = async (
  err: ApiError | BaseError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err);
  if (err instanceof BaseError) {
    return res.status(err.httpCode).json(err);
  } else if (err instanceof ApiError) {
    return res.status(err.httpCode).json(err);
  } else {
    return res.status(500).json(new AppError());
  }
};
