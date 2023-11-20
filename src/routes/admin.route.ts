import express, { Router } from "express";
import adminController from '../controllers/admin.controller';

export const adminRouter = (router: Router) => {
  router.post('api/register', adminController.adminRegister);
  router.post('api/login', adminController.adminLogin);
}

const router = express.Router();



// const router = express.