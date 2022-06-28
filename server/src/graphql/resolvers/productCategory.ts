import { ProductCategoryInput } from 'db/types';
import { Product, ProductCategory } from '../../db/models';

export default {
  Query: {
    getProductCategories: async () => {
      try {
        return await ProductCategory.findAll({
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: [
            {
              model: Product,
            },
          ],
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    getProductCategory: async (
      _root: unknown,
      { slug, id }: { slug: string; id: string }
    ) => {
      try {
        let where = {};

        if (slug) {
          where = { urlKey: slug };
        }

        if (id) {
          where = { id: id };
        }

        const category = await ProductCategory.findOne({
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: {
            model: Product,
          },
          where,
        });

        return category;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },

  Mutation: {
    createProductCategory: async (
      _root: unknown,
      { name }: ProductCategoryInput
    ) => {
      try {
        return await ProductCategory.create({ name });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
