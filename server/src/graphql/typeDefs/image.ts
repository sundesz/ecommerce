import { gql } from 'apollo-server-express';

export default gql`
  # ----------------
  # TYPES
  # ----------------

  type Image {
    id: ID!
    productId: String
    productCategoryId: String
    name: String!
    fileLocation: String!
    createdAt: String
    updatedAt: String
  }

  # ----------------
  # QUERIES
  # ----------------
  extend type Query {
    getImages(slug: String, productId: String): [Image!]!
  }

  # ----------------
  # MUTATIONS
  # ----------------

  # ----------------
  # INPUT
  # ----------------
`;
