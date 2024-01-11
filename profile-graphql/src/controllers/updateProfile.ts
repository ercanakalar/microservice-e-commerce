import { Request, Response } from 'express';

import { Profile } from '../models/profile-model';

import { BadRequestError } from '../errors';
import { ICurrentUserBasicInfo } from '../types/userModalTypes';
import { IProfile } from '../types/profileModalTypes';


const updateProfile = async (currentUser: ICurrentUserBasicInfo, args: IProfile, req: Request, res: Response) => {
    const { id, email } = currentUser;

    if (!email) {
        throw new BadRequestError('Email is required');
    }

    const findProfile = await Profile.findOne({ email });

    if (!findProfile) {
        throw new BadRequestError('Profile not found');
    }

    await Profile.findOneAndUpdate({ email });

    return 'deneme'
};

export default updateProfile;
