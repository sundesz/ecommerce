import { Model, DataTypes } from 'sequelize';
import { IPageAttributes, PageInput, PageStatus } from '../types/page';
import { sequelize } from '../index';
import slugify from 'slugify';

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
    hooks: {
      beforeValidate: async (page) => {
        if (page.name) {
          page.urlKey = (await generateSlug(page.name)) as string;
        }
      },
    },
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'page',
  }
);

// const generateSlug = (name: string) => slugify(name);

const generateSlug = (name: string) =>
  new Promise((resolve, _reject) => resolve(slugify(name, { lower: true })));

export default Page;
