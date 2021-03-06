import User from './user';
import Page from './page';
import Address from './address';
import ProductCategory from './productCategory';
import Product from './product';
import Image from './image';
import Cart from './cart';
import CartProduct from './cartProduct';
import Session from './session';

User.hasOne(Address, { onDelete: 'CASCADE' });
Address.belongsTo(User);

User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartProduct);
CartProduct.belongsTo(Cart);

CartProduct.hasMany(Product, { foreignKey: 'id' });
Product.belongsTo(CartProduct, { foreignKey: 'id' });

ProductCategory.hasMany(Product, { foreignKey: 'productCategoryId' });
Product.belongsTo(ProductCategory, { foreignKey: 'id' });

ProductCategory.hasMany(Image, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'productCategoryId',
    allowNull: true,
  },
});
Image.belongsTo(ProductCategory, { foreignKey: 'id' });

Product.hasMany(Image, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'productId',
    allowNull: true,
  },
});
Image.belongsTo(Product, { foreignKey: 'id' });

export {
  User,
  Page,
  Address,
  ProductCategory,
  Product,
  Image,
  Cart,
  CartProduct,
  Session,
};
