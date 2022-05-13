import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../../../interfaces/User.interface';

dotenv.config();

const GenerateToken = (user: User): string => {
  const jwtConfig = {
    expiresIn: '1d',
  };

  const payload = {
    id: user.id,
    username: user.username,
    classe: user.classe,
    level: user.level,
  };

  const JWT = process.env.SECRET || 'usersecret';

  const token = jwt.sign(payload, JWT, jwtConfig);

  return token;
};

export default GenerateToken;