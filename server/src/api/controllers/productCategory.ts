import { RequestHandler, NextFunction } from 'express';
import slugify from 'slugify';
import ProductCategory from '../../db/models/productCategory';
import Product from '../../db/models/product';
import { ProductCategoryInput } from '../../db/types/productCategory';

const findByIdMiddleware: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id } = req.params as { id: string };
    const category = await ProductCategory.findByPk(id);

    if (!category) {
      return res.sendStatus(404);
    }

    req.pageCategory = category;

    next();
  } catch (error: unknown) {
    next(error);
  }
};

const getProductCategory: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    let where = {};

    const queryUrlkey = req.query.urlkey as string;

    if (queryUrlkey) {
      where = { urlKey: queryUrlkey };
    }

    const categories = await ProductCategory.findAll({
      attributes: ['name', 'urlKey'],
      include: [
        {
          model: Product,
          attributes: {
            exclude: ['productCategoryId', 'createdAt', 'updatedAt'],
          },
        },
      ],
      where,
    });
    res.json(categories);
  } catch (error: unknown) {
    next(error);
  }
};

const getOne: RequestHandler = (req, res, next: NextFunction) => {
  try {
    res.json(req.pageCategory);
  } catch (error: unknown) {
    next(error);
  }
};

const create: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { name } = req.body as ProductCategoryInput;
    const category = await ProductCategory.create({
      name,
      urlKey: slugify(name),
    });

    res.json(category);
  } catch (error: unknown) {
    next(error);
  }
};

const update: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const productCategory = req.pageCategory as ProductCategory;
    const { name } = req.body as ProductCategoryInput;

    productCategory.name = name || productCategory.name;
    productCategory.urlKey = slugify(name);

    await productCategory.save();

    res.json(productCategory);
  } catch (error: unknown) {
    next(error);
  }
};

const remove: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const productCategory = req.pageCategory as ProductCategory;

    await productCategory.destroy();
    res.sendStatus(204);
  } catch (error: unknown) {
    next(error);
  }
};

export default {
  findByIdMiddleware,
  getProductCategory,
  getOne,
  create,
  update,
  remove,
};
