import User from './user';
import Page from './page';
import Address from './address';
import ProductCategory from './productCategory';
import Product from './product';
import ProductImage from './productImage';
import Cart from './cart';
import CartProduct from './cartProduct';
import Session from './session';

User.hasOne(Address);
Address.belongsTo(User);

User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasMany(Address);

Cart.hasMany(CartProduct);
CartProduct.belongsTo(Cart);

CartProduct.hasMany(Product, { foreignKey: 'id' });

ProductCategory.hasMany(Product, { foreignKey: 'productCategoryId' });
Product.belongsTo(ProductCategory, { foreignKey: 'id' });

Product.hasMany(ProductImage, { foreignKey: 'productId' });
ProductImage.belongsTo(Product, { foreignKey: 'id' });

// ProductImage.belongsToMany(ProductCategory, { through: Product });

export {
  User,
  Page,
  Address,
  ProductCategory,
  Product,
  ProductImage,
  Cart,
  CartProduct,
  Session,
};
