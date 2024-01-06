import { Request, Response } from 'express';
import jwt, { Jwt } from 'jsonwebtoken';

import { PasswordManager } from '../services';
import { BadRequestError } from '../errors';
import { UserSignIn } from '../types/userModalType';
import { User } from '../models/user-model';

const signIn = async (args: UserSignIn,context:any) => {
  const { email, password } = args;

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new BadRequestError('Invalid credentials');
  }

  const passwordMatch = await PasswordManager.compare(
    existingUser.password,
    password
  );
  if (!passwordMatch) {
    throw new BadRequestError('Wrong password, try again.');
  }

  const userJwt: Jwt | string = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY!,
    {
      expiresIn: '1m',
    }
  );

  context.res.cookie('user', userJwt, { httpOnly: true });

  return {
    message: 'User signed in successfully!',
    user: {
      id: existingUser.id,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      email: existingUser.email,
    },
    token: userJwt,
  };
};

export default signIn;
