import { Joi } from 'express-validation';

export const registerValidation = Joi.object({
  // username: Joi.string().required(),
  // password: Joi.string().required(),
  // email: Joi.string().required()

  username: Joi.string().optional(),
  password: Joi.string().optional(),
  email: Joi.string().optional()
});
