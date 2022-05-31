import { NextFunction, RequestHandler } from 'express';
import { PLEASE_LOGIN } from '../utils/errorDescription';

export const isAuth: RequestHandler = (req, res, next: NextFunction) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.status(403).json({ error: PLEASE_LOGIN });
  }
};
