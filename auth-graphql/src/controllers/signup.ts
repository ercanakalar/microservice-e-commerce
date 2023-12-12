import { Request, Response } from 'express';
import jwt, { Jwt } from 'jsonwebtoken';

import { User } from '../models/user-model';
import { PasswordManager } from '../services';
import { BadRequestError } from '../errors';

const signUp = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError('Email in use');
  }

  const isMatchPasswords = await PasswordManager.isMatchPasswords(
    password,
    confirmPassword
  );

  if (!isMatchPasswords) {
    throw new BadRequestError('Passwords do not match');
  }

  const newUser = User.build({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  });
  await newUser.save();

  const userJwt: Jwt | string = jwt.sign(
    {
      id: newUser.id,
      email: newUser.email,
    },
    process.env.JWT_KEY!,
    {
      expiresIn: '1m',
    }
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(201).send({
    message: 'You have successfully registered.',
    user: {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    },
    token: userJwt,
  });
};

export default signUp;
