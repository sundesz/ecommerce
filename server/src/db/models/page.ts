import { Model, DataTypes } from 'sequelize';
import { IPageAttributes, PageInput, PageStatus } from '../types/page';
import { sequelize } from '../index';

class Page
  extends Model<IPageAttributes, PageInput>
  implements IPageAttributes
{
  public id!: string;
  public name!: string;
  public content!: string;
  public urlKey!: string;
  public status!: PageStatus;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Page.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    urlKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('header', 'menu', 'footer'),
      allowNull: false,
      defaultValue: 'header',
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'page',
  }
);

export default Page;
