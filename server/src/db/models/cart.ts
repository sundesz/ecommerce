import { Model, DataTypes } from 'sequelize';
import { CartInput, CartStatus, ICartAttributes } from '../types/cart';
import { sequelize } from '../index';

class Cart
  extends Model<ICartAttributes, CartInput>
  implements ICartAttributes
{
  public id!: string;
  public sessionId!: string;
  public userId!: string;
  public email!: string;
  public userAgent!: string;
  public ipAddress!: string;
  public status!: CartStatus;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Cart.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    sessionId: {
      type: DataTypes.STRING,
      allowNull: true, // false
      unique: true,
      references: { model: 'session', key: 'sid' },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'user', key: 'id' },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('sold', 'pending', 'canceled'),
      allowNull: false,
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'cart',
  }
);

export default Cart;
