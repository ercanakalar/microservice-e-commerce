import express from 'express';

import {
  requireAuth,
  validateRequest,
  currentUserMiddleware,
} from '../middlewares';


const router = express.Router();


export { router as profileRouter };
