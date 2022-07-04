import { gql } from 'apollo-server-express';

export default gql`
  # ----------------
  # ENUMS
  # ----------------
  enum PageStatus {
    header
    menu
    footer
  }

  # ----------------
  # TYPES
  # ----------------

  type Page {
    id: ID!
    name: String!
    content: String!
    urlKey: String!
    status: PageStatus!
    createdAt: String
    updatedAt: String
  }

  # ----------------
  # QUERIES
  # ----------------

  extend type Query {
    getPages: [Page!]!
    getPage(slug: String, id: ID): Page
  }

  # ----------------
  # MUTATIONS
  # ----------------
  extend type Mutation {
    createPage(
      name: String!
      content: String!
      status: PageStatus!
      urlKey: String
    ): Page

    updatePage(
      id: ID!
      name: String!
      content: String!
      status: PageStatus!
      urlKey: String
    ): Page!

    deletePage(id: ID!): Boolean
  }

  # ----------------
  # INPUT
  # ----------------
`;
