import { gql } from 'apollo-server-express';

export default gql`
  # ----------------
  # TYPES
  # ----------------
  type User {
    id: ID!
    name: String!
    username: String!
    "hide password"
    password: String!
    """
    Check for admin
    """
    isAdmin: Boolean
    isDisabled: Boolean
    createdAt: String
    updatedAt: String
    Address: Address
  }

  # ----------------
  # QUERIES
  # ----------------
  extend type Query {
    count: Int!
    getUsers: [User!]!
    getUser(username: String, id: String): User!
  }

  # ----------------
  # MUTATIONS
  # ----------------
  extend type Mutation {
    createUser(input: CreateUserInput): User!
    updateUser(input: UpdateUserInput): User!
  }

  # ----------------
  # INPUT
  # ----------------
  input CreateUserInput {
    username: String!
    name: String!
    password: String!
    isAdmin: Boolean
    isDisabled: Boolean
    address: CreateAddressInput
  }

  input CreateAddressInput {
    email: String!
    street: String!
    city: String!
    postcode: String!
    countrycode: String
  }

  input UpdateUserInput {
    userId: String
    username: String
    name: String
    password: String
    isAdmin: Boolean
    isDisabled: Boolean
  }
`;
