import { Router } from 'express';
import authController from '../controllers/auth.controller';
import authMiddleware from '@/middleware/auth.middleware';

const authRouter = (router: Router) => {
  router.post('/api/register', authController.register);
  router.post('/api/login', authMiddleware.verifyAccessToken, authController.login);
  router.post('/api/logout', authController.logout);
};

export default authRouter;
