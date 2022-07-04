import { DataTypes, Sequelize } from 'sequelize';
import { Migration } from '..';

export const up: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.createTable('page', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('header', 'menu', 'footer'),
      allowNull: false,
      defaultValue: 'header',
    },
    url_key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
};

export const down: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.dropTable('page');
};
