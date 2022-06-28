import pageResolver from './page';
import productResolver from './product';
import productCategoryResolver from './productCategory';
import imageResolver from './image';
import userResolver from './user';

export default [
  pageResolver,
  productResolver,
  productCategoryResolver,
  imageResolver,
  userResolver,
];

// const resolvers = {
//   Query: {
//     user(parent, args, context, info) {
//       return users.find(user => user.id === args.id);
//     }
//   }
// }
