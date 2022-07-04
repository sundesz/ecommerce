import { DataTypes, Sequelize } from 'sequelize';
import { Migration } from '../index';

export const up: Migration = async ({
  context: queryInterface,
}): Promise<void> => {
  await queryInterface.createTable('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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

  await queryInterface.createTable('session', {
    sid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      references: { model: 'user', key: 'id' },
    },
    is_valid: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    data: {
      type: DataTypes.TEXT,
    },
    expires: {
      type: DataTypes.DATE,
    },
    token: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW,
    },
  });

  await queryInterface.createTable('address', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'user', key: 'id' },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 5],
      },
    },
    countrycode: {
      type: DataTypes.STRING,
      defaultValue: 'FI',
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

  await queryInterface.createTable('product_category', {
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

  await queryInterface.createTable('product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    product_category_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'product_category', key: 'id' },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ean: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
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

  await queryInterface.createTable('image', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: { model: 'product', key: 'id' },
    },
    product_category_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: { model: 'product_category', key: 'id' },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_location: {
      type: DataTypes.STRING,
      allowNull: true,
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

  await queryInterface.createTable('cart', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    session_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: { model: 'session', key: 'sid' },
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'user', key: 'id' },
    },
    status: {
      type: DataTypes.ENUM('sold', 'pending', 'canceled'),
      allowNull: false,
      defaultValue: 'pending',
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
      //      defaultValue: DataTypes.NOW
    },
  });

  await queryInterface.createTable('cart_product', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'cart', key: 'id' },
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'product', key: 'id' },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
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
  await queryInterface.dropTable('user');
  await queryInterface.dropTable('session');
  await queryInterface.dropTable('address');
  await queryInterface.dropTable('product_category');
  await queryInterface.dropTable('product');
  await queryInterface.dropTable('image');
  await queryInterface.dropTable('cart');
  await queryInterface.dropTable('cart_product');
};

// https://stackoverflow.com/questions/70371646/sequelize-cli-db-migrations-with-typescript
