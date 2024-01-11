import express from 'express';

import {
  requireAuth,
  validateRequest,
  currentUserMiddleware,
} from '../middlewares';

import createProfile from '../controllers/createProfile';
import updateProfile from '../controllers/updateProfile';

const router = express.Router();

// router.post('/create-profile', requireAuth, validateRequest, createProfile);
router.put('/update-profile', requireAuth, validateRequest, updateProfile);

export { router as profileRouter };
