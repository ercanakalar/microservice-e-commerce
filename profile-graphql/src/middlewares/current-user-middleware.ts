import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { ProfilePayload } from '../types';
import { BadRequestError } from '../errors';

declare global {
  namespace Express {
    interface Request {
      currentProfile?: ProfilePayload;
    }
  }
}

export const currentUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.session?.jwt, 'req.session?.jwt');
  if (!req.session?.jwt) {
    throw new BadRequestError('Not authorized');
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as ProfilePayload;

    req.currentProfile = payload;

    next();
  } catch (error) {}
};
