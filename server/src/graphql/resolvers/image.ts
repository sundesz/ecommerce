import { IImageAttributes, IImageSearchAttributes } from '../../db/types';
import { Sequelize } from 'sequelize';
import { Product, Image, ProductCategory } from '../../db/models';

export default {
  Query: {
    getImages: async (
      _root: unknown,
      {
        productId,
        productUrlKey,
        productCategoryId,
        productCategoryUrlKey,
      }: IImageSearchAttributes
    ) => {
      try {
        let imageWhere = {};

        if (productId) {
          imageWhere = { productId };
        }

        if (productCategoryId) {
          imageWhere = { productCategoryId };
        }

        if (productUrlKey) {
          return await Image.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: {
              model: Product,
              attributes: [],
              on: {
                col1: Sequelize.where(
                  Sequelize.col('Image.product_id'),
                  '=',
                  Sequelize.col('Product.id')
                ),
              },
              where: { urlKey: productUrlKey },
            },
            order: [['updatedAt', 'DESC']],
          });
        }

        if (productCategoryUrlKey) {
          return await Image.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: {
              model: ProductCategory,
              attributes: [],
              on: {
                col1: Sequelize.where(
                  Sequelize.col('Image.product_category_id'),
                  '=',
                  Sequelize.col('ProductCategory.id')
                ),
              },
              where: { urlKey: productCategoryUrlKey },
            },
            order: [['updatedAt', 'DESC']],
          });
        }

        return await Image.findAll({
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          where: imageWhere,
          order: [['updatedAt', 'DESC']],
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },

  Mutation: {
    createImage: async (
      _root: unknown,
      { productId, productCategoryId, name, fileLocation }: IImageAttributes
    ) => {
      try {
        if (productId || productCategoryId) {
          return await Image.create({
            productId,
            productCategoryId,
            name,
            fileLocation,
          });
        }

        throw new Error('No product or product category defined');
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    updateImage: async (
      _root: unknown,
      { productId, productCategoryId, name, fileLocation }: IImageAttributes
    ) => {
      try {
        if (productId || productCategoryId) {
          const image = await Image.findOne({
            where: { productId, productCategoryId },
          });

          if (image) {
            return await image.update({
              name: name ?? image.name,
              fileLocation: fileLocation ?? image.fileLocation,
            });
          }

          throw new Error('Product or product category not found');
        }

        throw new Error('No product or product category defined');
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
