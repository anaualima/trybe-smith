import { Router } from 'express';
import UserController from '../src/controllers/user.controller';
import userValidate from '../src/controllers/middlewares/uservalidate';

const router = Router();

const userController = new UserController();

router.post('/', userValidate, userController.create);

export default router;