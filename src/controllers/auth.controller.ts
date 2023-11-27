import { Request, Response  } from "express";
import authService from "@/services/auth.service";
import { registerValidation } from "@/validation/register.validation";

const authController = {
  register: async (req: Request, res: Response ) => {
    const { body } = req;
    const { error } = registerValidation.validate(body);

    if (error) {
      return res.status(400).send(error.details);
    }

    const newUser = {
      username: 'admin',
      password: '1',
      email: '123@gmail.com',
    }

    const data = await authService.createUser(newUser);
    res.send(data);
  }
}

export default authController;