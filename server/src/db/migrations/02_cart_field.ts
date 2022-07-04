import { DataTypes } from 'sequelize';
import { Migration } from '..';

export const up: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.addColumn('cart', 'email', {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  });

  await queryInterface.addColumn('cart', 'user_agent', {
    type: DataTypes.STRING,
    allowNull: false,
  });

  await queryInterface.addColumn('cart', 'ip_address', {
    type: DataTypes.STRING,
    allowNull: false,
  });
};

export const down: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.removeColumn('cart', 'email');
  await queryInterface.removeColumn('cart', 'user_agent');
  await queryInterface.removeColumn('cart', 'ip_address');
};
