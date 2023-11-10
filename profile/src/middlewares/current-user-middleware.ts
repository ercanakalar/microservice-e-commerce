import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { UserPayload } from '../types/userPayload';
import { BadRequestError } from '../errors';

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
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
    ) as UserPayload;

    req.currentUser = payload;

    next();
  } catch (error) {}
};
