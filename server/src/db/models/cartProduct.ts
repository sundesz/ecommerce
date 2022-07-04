import { Model, DataTypes } from 'sequelize';
import { ICartProductAttributes, CartProductInput } from '../types/cartProduct';
import { sequelize } from '../index';

class CartProduct
  extends Model<ICartProductAttributes, CartProductInput>
  implements ICartProductAttributes
{
  public id!: string;
  public cartId!: string;
  public productId!: string;
  public price!: number;
  public quantity!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CartProduct.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    cartId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'cart', key: 'id' },
    },
    productId: {
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
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'cart_product',
    indexes: [
      {
        unique: true,
        fields: ['cartId', 'productId'],
      },
    ],
  }
);

export default CartProduct;
