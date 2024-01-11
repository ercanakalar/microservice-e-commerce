import express from 'express';
import resolvers from '../models/profile-resolvers';

const router = express.Router();

router.use('/create-profile', resolvers.Mutation.updateProfile);

export { router as profileRouter };
