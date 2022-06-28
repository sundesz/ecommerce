import { Model, DataTypes } from 'sequelize';
import { IImageAttributes, ImageInput } from '../types/image';
import { sequelize } from '../index';

class Image
  extends Model<IImageAttributes, ImageInput>
  implements IImageAttributes
{
  public id!: string;
  public productId!: string;
  public productCategoryId!: string;
  public name!: string;
  public fileLocation!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Image.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: { model: 'product', key: 'id' },
    },
    productCategoryId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: { model: 'productCategory', key: 'id' },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'image',
  }
);

export default Image;
