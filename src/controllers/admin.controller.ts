import { Request, Response } from 'express';

const adminRegister = (req: Request, res: Response) => {
  console.log(req.body, 'adminRegister...');
  res.send(req.body);
}

const adminLogin = (req: Request, res: Response) => {
  console.log(req.body, 'adminLogin...');
}

const adminLogout = (req: Request, res: Response) => {
  console.log(req.body, 'adminLogin......');
}

const adminDelete = (req: Request, res: Response) => {
  console.log(req.body, 'adminDelete......');
}

export default {
  adminRegister,
  adminLogin,
  adminLogout,
  adminDelete,
}