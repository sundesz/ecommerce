import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum PageStatus {
    header
    menu
    footer
  }

  type Address {
    id: ID!
    userId: ID!
    email: String!
    street: String!
    city: String!
    postcode: String!
    countrycode: String!
    createdAt: String
    updatedAt: String
  }

  type User {
    id: ID!
    name: String!
    username: String!
    password: String!
    isAdmin: Boolean
    isDisabled: Boolean
    createdAt: String
    updatedAt: String
  }

  type ProductCategory {
    id: ID!
    categoryName: String!
    urlKey: String!
    createdAt: String
    updatedAt: String
  }

  type Product {
    id: ID!
    categoryName: String!
    name: String!
    description: String!
    ean: String!
    price: Float!
    quantity: Float!
    urlKey: String!
    createdAt: String
    updatedAt: String
  }

  type ProductImage {
    id: ID!
    productId: String!
    imageName: String!
    fileLocation: String!
    createdAt: String
    updatedAt: String
  }

  type Page {
    id: ID!
    name: String!
    content: String!
    urlKey: String!
    status: PageStatus!
    createdAt: String
    updatedAt: String
  }

  type Query {
    pages: [Page]
    products: [Product]
    productImages: [ProductImage]
    productCategories: [ProductCategory]
  }
`;
