import { NextFunction, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import { SALT } from '../../config';
import User from '../../db/models/user';
import { UserInput } from '../../db/types/user';

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const create: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { name, username, password } = req.body as UserInput;

    const passwordHash = await bcrypt.hash(password, Number(SALT));

    const user = await User.create({
      username,
      name,
      password: passwordHash,
    });

    // TODO:: hide password when sending
    res.json(user);
  } catch (error: unknown) {
    next(error);
  }
};

//disabled user

export default {
  create,
  // update,
};
