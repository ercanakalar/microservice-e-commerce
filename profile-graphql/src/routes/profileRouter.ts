import express from 'express';
import { validateRequest } from '../middlewares';
import resolvers from '../models/profile-resolvers';

const router = express.Router();

// router.post('/create-profile', requireAuth, validateRequest, createProfile);
router.use('/update-profile', validateRequest, resolvers.Mutation.createProfile);

export { router as profileRouter };
