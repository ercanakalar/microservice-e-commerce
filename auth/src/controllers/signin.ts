import { Request, Response } from 'express';
import jwt, { Jwt } from 'jsonwebtoken';

import { User } from '../models/user-model';
import { PasswordManager } from '../services';
import { BadRequestError } from '../errors';

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

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

  req.session = {
    jwt: userJwt,
  };

  res.status(200).send({
    message: 'User signed in successfully',
    user: {
      id: existingUser.id,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      email: existingUser.email,
    },
    token: userJwt,
  });
};

export default signIn;
