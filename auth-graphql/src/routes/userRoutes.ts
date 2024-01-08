import express from 'express';

import { signInValidator, signUpValidator ,forgotPasswordValidation} from '../validations';

import {
  validateRequest,
} from '../middlewares';

import {
  protect,
  forgotPassword,
  resetPassword,
} from '../controllers';
import resolvers from '../models/user-resolvers';

const router = express.Router();

router.post('/signup', signUpValidator, validateRequest, resolvers.Mutation.signUp);
router.post('/signin', signInValidator, validateRequest, resolvers.Mutation.signIn);
router.post('/signout', resolvers.Mutation.signOut);
router.get('/currentuser', resolvers.Query.currentUser);

router.post('/forgot-password', forgotPasswordValidation,forgotPassword);
router.patch('/reset-password/:token', resetPassword);

router.get('/', resolvers.Query.getAllUsers)

router.patch('/update-password', resolvers.Mutation.updatePassword);

export { router as signUpRouter };
