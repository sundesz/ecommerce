import { NextFunction, RequestHandler } from 'express';
import { Sequelize } from 'sequelize';
import { Product, ProductCategory, Image } from '../../db/models';
// import ProductCategory from '../../db/models/productCategory';

const getProducts: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    let where = {};
    const queryUrlKey = req.query.urlkey as string;

    if (queryUrlKey) {
      where = { urlKey: queryUrlKey };
    }

    // https://stackoverflow.com/questions/42226351/sequelize-join-with-multiple-column
    const product = await Product.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: Image,
          attributes: ['name', 'fileLocation'],
        },
        {
          model: ProductCategory,
          on: {
            col1: Sequelize.where(
              Sequelize.col('Product.product_category_id'),
              '=',
              Sequelize.col('ProductCategory.id')
            ),
          },
          attributes: ['name', 'urlKey'],
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
