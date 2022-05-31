import { Seeder } from '..';

const seedUsers = [
  {
    id: '70163e63-9c9d-4809-af40-16b1bcdb3651',
    name: 'admin',
    username: 'admin',
    is_admin: true,
    password: '$2a$12$ZBeEeJK/vnt.h9CG.1KIv.URtwNZOR4Ip1BwjEGOIC.No9padVSTa', //admin
  },
];

export const up: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkInsert('user', seedUsers);
};

export const down: Seeder = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.bulkDelete('user', {
    id: seedUsers.map((u) => u.id),
  });
};
