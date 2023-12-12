import express from 'express';

import { signInValidator, signUpValidator ,forgotPasswordValidation} from '../validations';

import {
  requireAuth,
  validateRequest,
  currentUserMiddleware,
} from '../middlewares';

import {
  currentUser,
  signOut,
  protect,
  signUp,
  signIn,
  forgotPassword,
  resetPassword,
  updatePassword,
} from '../controllers';

const router = express.Router();

router.post('/signup', signUpValidator, validateRequest, signUp);
router.post('/signin', signInValidator, validateRequest, signIn);
router.post('/signout', signOut);
router.get('/currentuser', currentUserMiddleware, requireAuth, currentUser);

router.post('/forgot-password', forgotPasswordValidation,forgotPassword);
router.patch('/reset-password/:token', resetPassword);

router.use(protect);

router.patch('/update-password', updatePassword);

export { router as signUpRouter };
