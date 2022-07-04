import { Model, DataTypes } from 'sequelize';
import { IUserAttributes, UserInput } from '../types/user';
import { sequelize } from '../index';
import bcrypt from 'bcrypt';
import { SALT_ROUND } from '../../config';

class User
  extends Model<IUserAttributes, UserInput>
  implements IUserAttributes
{
  public id!: string;
  public name!: string;
  public isAdmin!: boolean;
  public isDisabled!: boolean;
  public username!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    isAdmin: {
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
    isDisabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'user',
  }
);

// https://sequelize.org/docs/v6/other-topics/hooks/
User.beforeCreate(async (user) => {
  if (user.password) {
    user.password = await generatePasswordHash(user.password);
  }
});

const generatePasswordHash = async function (password: string) {
  return await bcrypt.hash(password, SALT_ROUND);
};

export default User;
