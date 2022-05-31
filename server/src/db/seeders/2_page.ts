import { v4 as uuid } from 'uuid';
import { Seeder } from '..';

const seedPages = [
  {
    id: uuid(),
    name: 'Header',
    status: 'header',
    content: '',
    url_key: 'header',
  },
  {
    id: uuid(),
    name: 'Footer',
    status: 'footer',
    content: '',
    url_key: 'footer',
  },
  {
    id: uuid(),
    name: 'Menu',
    status: 'menu',
    content: '',
    url_key: 'menu',
  },
];

export const up: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkInsert('page', seedPages);
};

export const down: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkDelete('page', {
    id: seedPages.map((p) => p.id),
  });
};
