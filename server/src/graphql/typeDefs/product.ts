import { gql } from 'apollo-server-express';

export default gql`
  # ----------------
  # TYPES
  # ----------------
  type Product {
    id: ID!
    ProductCategory: ProductCategory
    Images: [Image]
    name: String!
    description: String!
    ean: String!
    price: Float!
    quantity: Float!
    urlKey: String!
    createdAt: String
    updatedAt: String
  }

  # ----------------
  # QUERIES
  # ----------------
  extend type Query {
    getProducts(slug: String): [Product!]!
  }

  # ----------------
  # MUTATIONS
  # ----------------

  extend type Mutation {
    createProduct(
      productCategory: String!
      name: String!
      description: String!
      ean: String!
      price: Float!
      quantity: Float!
      image: String
      imageLocation: String
    ): Product!

    updateProduct(
      productId: ID!
      productCategory: String
      name: String
      description: String
      ean: String
      price: Float
      quantity: Float
      image: String
      imageLocation: String
    ): Product!
  }

  # ----------------
  # INPUT
  # ----------------
`;
