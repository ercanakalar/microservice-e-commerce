import { Request, Response } from 'express';
import jwt, { Jwt } from 'jsonwebtoken';

import { PasswordManager } from '../services';
import { BadRequestError } from '../errors';
import userSchema from '../models/user-model';

const signIn = async (req: Request, res: Response) => {
  const existingUser = userSchema.getMutationType()?.getFields().signin.args.find((arg) => arg.name === 'existingUser');
  if (!existingUser) {
    throw new BadRequestError('Invalid credentials');
  }

  console.log(existingUser, 'existingUser');
};

export default signIn;
