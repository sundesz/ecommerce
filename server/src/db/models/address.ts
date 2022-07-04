import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';
import { AddressInput, IAddressAttributes } from '../types/address';

class Address
  extends Model<IAddressAttributes, AddressInput>
  implements IAddressAttributes
{
  declare id: string;
  public userId!: string;
  public email!: string;
  public street!: string;
  public city!: string;
  public postcode!: string;
  public countrycode!: string;
  public country!: string;

  public readonly createAt!: Date;
  public readonly updateAt!: Date;

  getFullName() {
    switch (this.countrycode) {
      case 'FI':
        return 'FINLAND';
      default:
        return this.countrycode;
    }
  }
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
    country: {
      type: DataTypes.VIRTUAL,
      get() {
        switch (this.countrycode) {
          case 'FI':
            return 'FINLAND';
          default:
            return this.countrycode;
        }
      },
      set() {
        throw new Error('Do not try to set the `Country` value!');
      },
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
