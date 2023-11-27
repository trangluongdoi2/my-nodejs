import { Router } from "express";
import authController from '../controllers/auth.controller';

const authRouter = (router: Router) => {
  router.post('/api/register', authController.register);
  // router.post('/api/login', authController.login);
}

export default authRouter;