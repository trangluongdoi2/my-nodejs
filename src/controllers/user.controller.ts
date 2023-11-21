// import { registerValidation } from '@/validation/register.validation';
import { Repository } from 'typeorm';
import { registerValidation } from '../validation/register.validation';
import { Request, Response } from 'express';

const userRegister = async (req: Request, res: Response) => {
  const { body } = req;
  const { error } = registerValidation.validate(body);

  if (error) {
    return res.status(400).send(error.details);
  }

  if (body.password !== body.passwordConfirm) {
    return res.status(400).send({
      message: 'ERROR :; Passwords do not match!'
    });
  }

  // const { password, ...user } = await Repository.
}

const userLogin = (req: Request, res: Response) => {
  console.log(req.body, 'userLogin...');
}

const userLogout = (req: Request, res: Response) => {
  console.log(req.body, 'userLogin......');
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