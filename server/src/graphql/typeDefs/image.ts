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
    getImages(
      productId: String
      productUrlKey: String
      productCategoryId: String
      productCategoryUrlKey: String
    ): [Image!]!
  }

  # ----------------
  # MUTATIONS
  # ----------------
  extend type Mutation {
    createImage(
      productId: String
      productCategoryId: String
      name: String!
      fileLocation: String!
    ): Image!

    updateImage(
      productId: String
      productCategoryId: String
      name: String!
      fileLocation: String!
    ): Image!
  }

  # ----------------
  # INPUT
  # ----------------
`;
