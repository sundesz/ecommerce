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
    createUser(
      username: String!
      name: String!
      password: String!
      isAdmin: Boolean
      isDisabled: Boolean
    ): User!
  }

  # ----------------
  # INPUT
  # ----------------
`;
