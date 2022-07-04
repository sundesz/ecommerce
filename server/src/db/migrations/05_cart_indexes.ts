import { Migration } from 'db';

export const up: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.addConstraint('cart_product', {
    fields: ['cart_id', 'product_id'],
    type: 'unique',
    name: 'cart_product_unique_cart_product',
  });
};

export const down: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.removeConstraint(
    'cart_product',
    'cart_product_unique_cart_product'
  );
};
