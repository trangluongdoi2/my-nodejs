import { Request, Response } from 'express';
import { createUser } from '../services/user.service';
import { registerValidation } from '../validation/register.validation';

export const userControllder = {
  
}

const userRegister = async (req: Request, res: Response) => {
  const { body } = req;
  const { error } = registerValidation.validate(body);

  if (error) {
    return res.status(400).send(error.details);
  }

  const newUser = {
    username: 'admin',
    password: '1',
  }

  const { password, ...data } = await createUser(newUser);
  console.log(data, 'data....');
  res.send('Hichic...');
}

const userLogin = (req: Request, res: Response) => {
  console.log(req.body, 'userLogin...');
}

const userLogout = (req: Request, res: Response) => {
  console.log(req.body, 'userLogout......');
}

const userDelete = (req: Request, res: Response) => {
  console.log(req.body, 'userDelete......');
}

export default {
  userRegister,
  userLogin,
  userLogout,
  userDelete,
}