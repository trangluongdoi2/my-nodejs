import { Router } from "express";
import userController from '../controllers/user.controller';

const userRouter = (router: Router) => {
  router.post('/api/register', userController.userRegister);
  router.post('/api/login', userController.userLogin);
}

export default userRouter;