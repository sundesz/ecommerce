import { DataTypes } from 'sequelize';
import { Migration } from '..';

export const up: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.addColumn('user', 'is_disabled', {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  });
};

export const down: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.removeColumn('user', 'is_disabled');
};
