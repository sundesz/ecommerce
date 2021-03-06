import { IProductInput, IProductUpdateInput } from '../../db/types';
import { Sequelize } from 'sequelize';
import { Product, ProductCategory, Image } from '../../db/models';

export default {
  Query: {
    getProducts: async (_root: unknown, { slug }: { slug: string }) => {
      try {
        let where = {};

        if (slug) {
          where = { urlKey: slug };
        }

        const products = await Product.findAll({
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
          order: [['updatedAt', 'DESC']],
        });

        return products;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },

  Mutation: {
    createProduct: async (_root: unknown, args: IProductInput) => {
      try {
        let productCategory = await ProductCategory.findOne({
          where: { name: args.productCategory },
        });

        if (!productCategory) {
          productCategory = await ProductCategory.create({
            name: args.productCategory,
          });
        }

        const product = await Product.create({
          name: args.name,
          description: args.description,
          price: args.price,
          quantity: args.quantity,
          ean: args.ean,
          productCategoryId: productCategory.id,
        });

        if (args.image) {
          await Image.create({
            productId: product.id,
            name: args.image,
            fileLocation: args.imageLocation,
          });
        }

        return product;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    updateProduct: async (_root: unknown, args: IProductUpdateInput) => {
      const product = await Product.findOne({ where: { id: args.productId } });

      if (!product) {
        throw new Error('Product not found');
      }

      let productCategory = await ProductCategory.findOne({
        where: { name: args.productCategory },
      });

      if (!productCategory && args.productCategory) {
        productCategory = await ProductCategory.create({
          name: args.productCategory,
        });
      }

      await product.update({
        name: args.name ?? product.name,
        description: args.description ?? product.description,
        price: args.price ?? product.price,
        quantity: args.quantity ?? product.quantity,
        ean: args.ean ?? product.ean,
        productCategoryId: productCategory?.id,
      });

      if (args.image) {
        await Image.create({
          productId: product.id,
          name: args.image,
          fileLocation: args.imageLocation ?? '',
        });
      }

      return product;
    },
  },
};
