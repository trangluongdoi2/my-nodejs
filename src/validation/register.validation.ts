import { Joi } from 'express-validation';

export const registerValidation = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});
