import { Request, Response, NextFunction } from 'express';

import { NotAuthorizedError } from '../errors';

export const requireAuth = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.currentUser == undefined) {
    throw new NotAuthorizedError();
  }

  next();
};
