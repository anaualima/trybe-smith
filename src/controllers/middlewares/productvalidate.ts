import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default function validateProduct(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body);

  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    }
    return res.status(422).json({ message: error.details[0].message });
  }

  next();
}