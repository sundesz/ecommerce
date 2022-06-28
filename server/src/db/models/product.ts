import { Model, DataTypes } from 'sequelize';
import { IProductAttributes, ProductInput } from '../types/product';
import { sequelize } from '../index';
import slugify from 'slugify';

class Product
  extends Model<IProductAttributes, ProductInput>
  implements IProductAttributes
{
  public id!: string;
  public productCategoryId!: string;
  public name!: string;
  public description!: string;
  public ean!: string;
  public price!: number;
  public quantity!: number;
  public urlKey!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productCategoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'productCategory', key: 'id' },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ean: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
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
    tableName: 'product',
  }
);

const generateSlug = (name: string) => slugify(name, { lower: true });

Product.beforeValidate(function (product) {
  if (product.name) {
    product.urlKey = generateSlug(product.name);
  }
});

export default Product;
