import { Seeder } from '..';

const seedProductCategories = [
  {
    id: 'defde9bb-7bca-47ab-a37b-6dbd50a03c30',
    category_name: 'Tv and video',
    url_key: 'tv-and-video',
  },
  {
    id: 'd3cdf24d-ff91-470e-8972-b1885fc183d9',
    category_name: 'other products',
    url_key: 'other-products',
  },
  {
    id: '74c78751-3a7b-4c08-8caa-4041eb3d164c',
    category_name: 'camera',
    url_key: 'camera',
  },
  {
    id: '6bf6fd4d-532f-4d96-a4b8-8e3dbf549456',
    category_name: 'computers',
    url_key: 'computers',
  },
];

export const up: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkInsert('product_category', seedProductCategories);
};

export const down: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkDelete('product_category', {
    id: seedProductCategories.map((p) => p.id),
  });
};
