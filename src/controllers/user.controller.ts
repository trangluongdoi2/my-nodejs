import { Request, Response } from 'express';
// import { createUser } from '../services/user.service'
import { registerValidation } from '../validation/register.validation';

const userRegister = async (req: Request, res: Response) => {
  const { body } = req;
  const { error } = registerValidation.validate(body);

  if (error) {
    return res.status(400).send(error.details);
  }
  res.send('Hichic...');
};

const userLogin = (req: Request, res: Response) => {
  console.log(req.body, 'userLogin...');
};

const userLogout = (req: Request, res: Response) => {
  console.log(req.body, 'userLogout......');
  return 1;
};

const userDelete = (req: Request, res: Response) => {
  console.log(req.body, 'userDelete......');
};

const userDeleteAll = (req: Request, res: Response) => {
  console.log(userDeleteAll, 'userDeleteAll...');
}

export default {
  userRegister,
  userLogin,
  userLogout,
  userDelete
};
