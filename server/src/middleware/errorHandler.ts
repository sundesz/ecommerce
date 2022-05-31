import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  console.log(error.name);
  console.log(error);
  switch (error.name) {
    case 'SequelizeUniqueConstraintError':
      return res.status(400).json({ error: error.errors[0].message as string });
    case 'SequelizeEagerLoadingError':
    case 'SequelizeDatabaseError':
    default:
      return res.status(400).json({ error: error.message as string });
  }

  next(error);
};
