import { gql } from 'apollo-server-express';
import userSchema from './user';
import addressSchema from './address';
import pageSchema from './page';
import productSchema from './product';
import productCategorySchema from './productCategory';
import imageSchema from './image';

const linkedSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [
  linkedSchema,
  userSchema,
  addressSchema,
  pageSchema,
  productSchema,
  productCategorySchema,
  imageSchema,
];
