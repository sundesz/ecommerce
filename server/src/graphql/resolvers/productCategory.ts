import { IProductCategoryInput } from 'db/types';
import { Image, Product, ProductCategory } from '../../db/models';

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
            {
              model: Image,
              attributes: ['name', 'fileLocation'],
            },
          ],
          order: [['updatedAt', 'DESC']],
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
      { input }: { input: IProductCategoryInput }
    ) => {
      try {
        const { name, image, imageLocation } = input;
        const productCategory = await ProductCategory.create({ name });

        if (image) {
          await Image.create({
            productCategoryId: productCategory.id,
            name: image,
            fileLocation: imageLocation ?? '',
          });
        }

        return productCategory;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
