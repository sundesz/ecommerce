import { Page, Product, ProductCategory, ProductImage } from '../db/models';

export const resolvers = {
  Query: {
    pages: async () => await Page.findAll({}),
    products: async () =>
      await Product.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'productCategoryId'],
        },
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
      }),
    productImages: async () => await ProductImage.findAll({}),
    productCategories: async () => await ProductCategory.findAll({}),
  },
};
