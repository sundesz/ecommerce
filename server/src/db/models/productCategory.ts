import { Model, DataTypes } from 'sequelize';
import {
  IProductCategoryAttributes,
  ProductCategoryInput,
} from '../types/productCategory';
import { sequelize } from '../index';

class ProductCategory
  extends Model<IProductCategoryAttributes, ProductCategoryInput>
  implements IProductCategoryAttributes
{
  public id!: string;
  public categoryName!: string;
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
    categoryName: {
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

export default ProductCategory;
