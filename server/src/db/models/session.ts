import { Model, DataTypes } from 'sequelize';
import { ISessionAttributes, SessionInput } from '../types/session';
import { sequelize } from '../index';

class Session
  extends Model<ISessionAttributes, SessionInput>
  implements ISessionAttributes
{
  public sid!: string;
  public userId!: string;
  public isValid!: boolean;
  public data!: string;
  public expires!: Date;
  public token!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Session.init(
  {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: { model: 'user', key: 'id' },
    },
    isValid: {
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
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'session',
    // modelName: 'session',
    defaultScope: {
      where: {
        isValid: true,
      },
    },
  }
);

export default Session;
