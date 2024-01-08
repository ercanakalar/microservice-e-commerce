import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { UserPayload } from '../types/userPayload';
import { BadRequestError } from '../errors';
import { User } from '../models/user-model';
import { ApolloError } from 'apollo-server-express';

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
    throw new ApolloError('Not authorized');
  }
  try {
    const token = req.headers.cookie.split('=')[1];
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY!
    ) as UserPayload;


    const user = await User.findById(payload.id);
  
    if (!user) {
      throw new ApolloError('User not found!');
    }
    
    req.currentUser = {
      id: user.id,
      email: user.email,
      expireToken: user.expireToken,
    };

    next();
  } catch (error) {}
};
