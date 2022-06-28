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
    countrycode: String!
    createdAt: String
    updatedAt: String
  }

  # ----------------
  # QUERIES
  # ----------------

  # ----------------
  # MUTATIONS
  # ----------------

  # ----------------
  # INPUT
  # ----------------
`;
