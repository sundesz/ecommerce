import pageResolver from './page';
import productResolver from './product';
import productCategoryResolver from './productCategory';
import imageResolver from './image';
import userResolver from './user';
import addressResolver from './address';
import cartResolver from './cart';

export default [
  addressResolver,
  pageResolver,
  productResolver,
  productCategoryResolver,
  imageResolver,
  userResolver,
  cartResolver,
];

// const resolvers = {
//   Query: {
//     user(parent, args, context, info) {
//       return users.find(user => user.id === args.id);
//     }
//   }
// }
