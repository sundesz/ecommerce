import { gql } from 'apollo-server-express';

export default gql`
  # ----------------
  # TYPES
  # ----------------
  type Address {
    id: ID!
    userId: ID!
    email: String!
    street: String!
    city: String!
    postcode: String!
    countrycode: String
    country: String
    createdAt: String
    updatedAt: String
  }

  # ----------------
  # QUERIES
  # ----------------
  extend type Query {
    getAddress(userId: ID!): Address
  }

  # ----------------
  # MUTATIONS
  # ----------------
  extend type Mutation {
    createAddress(
      userId: ID!
      email: String!
      street: String!
      city: String!
      postcode: String!
    ): Address!

    updateAddress(
      userId: ID!
      email: String
      street: String
      city: String
      postcode: String
    ): Address!
  }

  # ----------------
  # INPUT
  # ----------------
`;
