import { Request, Response } from 'express';

import { Profile } from '../models/profileModel';
import { BadRequestError } from '../errors';

const updateProfile = async (req: Request, res: Response) => {
    const { firstName, lastName, email, photo, active } = req.body;

    if (!email) {
        throw new BadRequestError('Email is required');
    }

    const findProfile = await Profile.findOne({ email });

    if (!findProfile) {
        throw new BadRequestError('Profile not found');
    }

    await Profile.findOneAndUpdate({ email }, { firstName, lastName, photo, active });
};

export default updateProfile;
