import { Request, Response } from 'express';
import authService from '@/services/auth.service';
import { registerValidation } from '@/validation/register.validation';
import { UserRegister } from '@/interface/auth.interface';

const authController = {
  register: async (req: Request, res: Response) => {
    const { body } = req;
    const { error } = registerValidation.validate(body);

    if (error) {
      return res.status(400).send(error.details);
    }

    // if (body.password !== body.passwordConfirm) {
    //   return res.status(400).send({
    //     message: 'ERROR :: Passwords do not match!'
    //   });
    // }

    const randomNumber = Math.floor(Math.random() * 1000);

    const newUser = {
      username: 'admin',
      password: '1',
      passwordConfirm: '1',
      email: `${randomNumber}@gmail.com`
    };

    const { password, ...user } = (await authService.createUser(newUser)) as UserRegister;
    res.send(user);
  },

  login: async (req: Request, res: Response) => {
    const { body } = req;
    const { password, ...data } = (await authService.login({ ...body })) as any;
    console.log(password, data, 'password, data...');
    res.send(data);
  },

  logout: async (req: Request, res: Response) => {
    res.send('Logout sucess!');
  }
};

export default authController;
