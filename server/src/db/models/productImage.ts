import { Model, DataTypes } from 'sequelize';
import {
  IProductImageAttributes,
  ProductImageInput,
} from '../types/productImage';
import { sequelize } from '../index';

class ProductImage
  extends Model<IProductImageAttributes, ProductImageInput>
  implements IProductImageAttributes
{
  public id!: string;
  public productId!: string;
  public imageName!: string;
  public fileLocation!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ProductImage.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: 'product', key: 'id' },
    },
    imageName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fileLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'product_image',
  }
);

export default ProductImage;
