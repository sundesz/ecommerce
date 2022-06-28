import { gql } from 'apollo-server-express';

export default gql`
  # ----------------
  # TYPES
  # ----------------
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

  # ----------------
  # QUERIES
  # ----------------
  extend type Query {
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
