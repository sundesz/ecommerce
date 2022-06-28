import { Model, DataTypes } from 'sequelize';
import {
  IProductCategoryAttributes,
  ProductCategoryInput,
} from '../types/productCategory';
import { sequelize } from '../index';
import slugify from 'slugify';

class ProductCategory
  extends Model<IProductCategoryAttributes, ProductCategoryInput>
  implements IProductCategoryAttributes
{
  public id!: string;
  public name!: string;
  public urlKey!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ProductCategory.init(
  {
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
    urlKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'product_category',
  }
);

ProductCategory.beforeValidate(function (productCategory) {
  if (productCategory.name) {
    productCategory.urlKey = generateSlug(productCategory.name);
  }
});

const generateSlug = (name: string) => slugify(name, { lower: true });

export default ProductCategory;
