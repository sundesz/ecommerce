import { DataTypes } from 'sequelize';
import { Migration } from '..';

export const up: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.changeColumn('session', 'token', {
    type: DataTypes.TEXT,
  });
  await queryInterface.changeColumn('session', 'is_valid', {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  });
};

export const down: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.changeColumn('session', 'token', {
    type: DataTypes.STRING,
  });
  await queryInterface.changeColumn('session', 'is_valid', {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  });
};
