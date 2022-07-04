import { gql } from 'apollo-server-express';

export default gql`
  # ----------------
  # ENUMS
  # ----------------
  enum CartStatus {
    sold
    pending
    canceled
  }

  # ----------------
  # TYPES
  # ----------------
  type CartProduct {
    id: ID!
    cartId: String!
    productId: String!
    price: Float
    quantity: Float

    Products: Product

    createdAt: String
    updatedAt: String
  }

  type Cart {
    id: ID!
    sessionId: ID
    userId: ID!
    status: CartStatus!
    email: String
    userAgent: String!
    ipAddress: String!

    createdAt: String
    updatedAt: String
    CartProducts: [CartProduct!]!
  }

  # ----------------
  # QUERIES
  # ----------------
  extend type Query {
    getCart(cartId: ID!): Cart
  }

  # ----------------
  # MUTATIONS
  # ----------------
  extend type Mutation {
    createCart(input: CreateCartInput): Cart
    updateCart(updateInput: UpdateCartInput): Cart
  }

  # ----------------
  # INPUTS
  # ----------------
  input CreateCartInput {
    sessionId: String
    userId: String!
    status: CartStatus!
    email: String
    userAgent: String!
    ipAddress: String!
    cartProduct: CreateCartProductInput!
  }

  input CreateCartProductInput {
    productId: ID!
    price: Float!
    quantity: Float!
  }

  input UpdateCartInput {
    cartId: ID!
    status: CartStatus
    email: String
    cartProduct: UpdateCartProductInput
  }

  input UpdateCartProductInput {
    productId: ID!
    price: Float
    quantity: Float
  }
`;
