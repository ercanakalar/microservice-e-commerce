import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { UserPayload } from '../types/userPayload';
import { BadRequestError } from '../errors';
import { User } from '../models/user-model';
import { PasswordManager } from '../services';

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
  if (!req.headers.cookie) {
    throw new BadRequestError('Not authorized');
  }
  const token = req.headers.cookie.split('=')[1];
  const payload = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;

  const user = await User.findById(payload.id);

  if (!user) {
    throw new BadRequestError('User not found!');
  }

  const userChangePasswordTime = new Date(user.passwordChangedAt).getTime();
  const isUserChangedPasswordAfterTokenIssued =
    PasswordManager.isUserChangedPasswordAfterTokenIssued(
      payload.iat * 1000,
      userChangePasswordTime
    );

  if (isUserChangedPasswordAfterTokenIssued) {
    throw new BadRequestError(
      'User recently changed password! Please log in again.'
    );
  }

  req.currentUser = {
    id: user.id,
    email: user.email,
    expireToken: user.expireToken!,
    iat: payload.iat,
  };
};
