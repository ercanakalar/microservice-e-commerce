import { Request, Response } from 'express';

import { Profile } from '../models/profile-model';

import { BadRequestError } from '../errors';
import { ICurrentUserBasicInfo } from '../types/userModalTypes';
import { IProfile } from '../types/profileModalTypes';
import jwt, { Jwt } from 'jsonwebtoken';

const updateProfile = async (
  currentUser: ICurrentUserBasicInfo,
  args: IProfile,
  req: Request,
  res: Response
) => {
  const { id } = currentUser;
  const { firstName, lastName, photo } = args;

  const findProfile = await Profile.findOne({ userId: id });

  if (!findProfile) {
    throw new BadRequestError('Profile not found');
  }

  await Profile.findOneAndUpdate({userId: id}, { firstName, lastName, photo });

  const profileJwt: Jwt | string = jwt.sign(
    {
      id: findProfile.id,
      userId: findProfile.userId,
      firstName,
      lastName,
      photo,
    },
    process.env.JWT_KEY!
  );

  res.cookie('profile', profileJwt, { httpOnly: true });

  return {
    message: 'Profile updated successfully!',
    data: {
      id: findProfile.id,
      userId: findProfile.userId,
      firstName,
      lastName,
      photo,
    },
  };
};

export default updateProfile;
