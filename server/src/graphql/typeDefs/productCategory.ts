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
    createProductCategory(name: String!): ProductCategory!
  }

  # ----------------
  # INPUT
  # ----------------
`;
