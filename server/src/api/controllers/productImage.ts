import { NextFunction, RequestHandler } from 'express';
import ProductImage from '../../db/models/productImage';

const getAll: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { productId } = req.params as { productId: string };
    const pImage = await ProductImage.findAll({
      attributes: ['imageName', 'fileLocation'],
      where: { productId },
    });
    res.json(pImage);
  } catch (error: unknown) {
    next(error);
  }
};

export default { getAll };
