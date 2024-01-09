import express from 'express';

import { signInValidator, signUpValidator ,forgotPasswordValidation} from '../validations';

import {
  validateRequest,
} from '../middlewares';

import resolvers from '../models/user-resolvers';

const router = express.Router();

router.post('/signup', signUpValidator, validateRequest, resolvers.Mutation.signUp);
router.post('/signin', signInValidator, validateRequest, resolvers.Mutation.signIn);
router.get('/signout', resolvers.Mutation.signOut);
router.get('/currentuser', resolvers.Query.currentUser);

router.post('/forgot-password', forgotPasswordValidation, resolvers.Mutation.forgotPassword);
router.post('/reset-password/:token', resolvers.Mutation.resetPassword);

router.get('/', resolvers.Query.getAllUsers)

router.post('/update-password', resolvers.Mutation.updatePassword);

export { router as signUpRouter };
