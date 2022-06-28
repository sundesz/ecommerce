import { Sequelize } from 'sequelize';
import { Product, Image } from '../../db/models';

export default {
  Query: {
    getImages: async (
      _root: unknown,
      { slug, productId }: { slug: string; productId: string }
    ) => {
      try {
        let productWhere = {};
        let imageWhere = {};

        if (slug) {
          productWhere = { urlKey: slug };
          imageWhere = {};
        }

        if (productId) {
          imageWhere = { productId };
          productWhere = {};
        }

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
            where: productWhere,
          },
          where: imageWhere,
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
