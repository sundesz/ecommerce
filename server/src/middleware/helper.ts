import { RequestHandler } from 'express';
import { UNKNOWN_ENDPOINT } from '../utils/errorDescription';

// const isAuthenticated: RequestHandler = async (
//   req,
//   res,
//   next: NextFunction
// ) => {
//   try {
//   } catch (error: unknown) {
//     next(error);
//   }
// };

export const unknownEndpoint: RequestHandler = (_, res) => {
  res.status(404).json({ error: UNKNOWN_ENDPOINT });
};
