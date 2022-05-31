import { NextFunction, RequestHandler } from 'express';
import { Product, ProductCategory, ProductImage } from '../../db/models';
// import ProductCategory from '../../db/models/productCategory';

const getProducts: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    let where = {};
    const queryUrlKey = req.query.urlkey as string;

    if (queryUrlKey) {
      where = { urlKey: queryUrlKey };
    }

    const product = await Product.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'productCategoryId'] },
      include: [
        {
          model: ProductImage,
          attributes: ['imageName', 'fileLocation'],
        },
        {
          model: ProductCategory,
          attributes: ['categoryName', 'urlKey'],
        },
      ],
      where,
    });

    res.json(product);
  } catch (error: unknown) {
    next(error);
  }
};

// const getOne: RequestHandler = async (req, res, next: NextFunction) => {
//   try {
//   } catch (error: unknown) {
//     next(error);
//   }
// };

// const create: RequestHandler = async (req, res, next: NextFunction) => {
//   try {
//   } catch (error: unknown) {
//     next(error);
//   }
// };

// const update: RequestHandler = async (req, res, next: NextFunction) => {
//   try {
//   } catch (error: unknown) {
//     next(error);
//   }
// };

const remove: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const product = req.product as Product;

    await product.destroy();

    res.sendStatus(204);
  } catch (error: unknown) {
    next(error);
  }
};

const findByIdMiddleware: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id: productId } = req.params as { id: string };
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.sendStatus(404);
    }

    req.product = product;

    next();
  } catch (error: unknown) {
    next(error);
  }
};

export default {
  getProducts,
  // getOne,
  // create,
  // update,
  remove,
  findByIdMiddleware,
};
