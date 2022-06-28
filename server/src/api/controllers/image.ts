import { NextFunction, RequestHandler } from 'express';
import Image from '../../db/models/image';

const getAll: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { productId } = req.params as { productId: string };
    const pImage = await Image.findAll({
      attributes: ['name', 'fileLocation'],
      where: { productId },
    });
    res.json(pImage);
  } catch (error: unknown) {
    next(error);
  }
};

export default { getAll };
