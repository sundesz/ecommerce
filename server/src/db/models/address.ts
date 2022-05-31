import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';
import { AddressInput, IAddressAttributes } from '../types/address';

class Address
  extends Model<IAddressAttributes, AddressInput>
  implements IAddressAttributes
{
  public id!: string;
  public userId!: string;
  public email!: string;
  public street!: string;
  public city!: string;
  public postcode!: number;
  public countrycode!: string;

  public readonly createAt!: Date;
  public readonly updateAt!: Date;
}

Address.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 5,
        max: 5,
      },
    },
    countrycode: {
      type: DataTypes.STRING,
      defaultValue: 'FI',
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'address',
  }
);

export default Address;
