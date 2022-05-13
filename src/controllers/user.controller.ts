import { Request, Response } from 'express';
import UserService from '../services/user.service';
import 'dotenv/config';
import GenerateToken from './middlewares/generatetokes';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    // res.status(201).json(userCreated);
    const token = GenerateToken(userCreated);
    return res.status(201).json({ token });
  };
}

export default UserController;