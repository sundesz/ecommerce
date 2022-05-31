import { NextFunction, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';
import { ILogin } from '../../db/types/session';
import { INVALID_USER_PASSWORD } from '../../utils/errorDescription';

const login: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { username, password } = req.body as ILogin;

    const user = await User.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: { username },
    });

    if (!user || !password) {
      return res.status(401).json({ error: INVALID_USER_PASSWORD });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: INVALID_USER_PASSWORD });
    }

    const userData = {
      username: user.username,
      name: user.name,
      admin: user.isAdmin,
    };

    req.session.isAuth = true;
    req.session.data = userData;
    res.status(200).json(userData);
  } catch (error: unknown) {
    next(error);
  }
};

const logout: RequestHandler = (req, res, next: NextFunction) => {
  console.log(req.session);
  try {
    req.session.destroy((err) => {
      if (err) next(err);

      res.status(204).send('logout');
    });
  } catch (error: unknown) {
    next(error);
  }
};

export default {
  login,
  logout,
};
