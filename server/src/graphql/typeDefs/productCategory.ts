import { gql } from 'apollo-server-express';

export default gql`
  # ----------------
  # TYPES
  # ----------------

  type ProductCategory {
    id: ID!
    name: String!
    urlKey: String!
    Products: [Product]!
    Image: [Image]
    createdAt: String
    updatedAt: String
  }

  # ----------------
  # QUERIES
  # ----------------

  extend type Query {
    getProductCategories: [ProductCategory!]!
    getProductCategory(slug: String, id: ID): ProductCategory
  }

  # ----------------
  # MUTATIONS
  # ----------------

  extend type Mutation {
    createProductCategory(input: CreateProductCategoryInput): ProductCategory!
  }

  # ----------------
  # INPUT
  # ----------------
  input CreateProductCategoryInput {
    name: String!
    image: String
    imageLocation: String
  }
`;
