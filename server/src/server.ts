import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import { Page, Product, ProductCategory, Image, User } from 'db/models';

const startApolloServer = async (
  typeDefs: DocumentNode[],
  resolvers: (
    | {
        Query: {
          getPages: () => Promise<Page[] | undefined>;
          getPage: (
            _root: unknown,
            { slug, id }: { slug: string; id: string }
          ) => Promise<Page | null | undefined>;
        };
      }
    | {
        Query: {
          getProducts: (
            _root: unknown,
            { slug }: { slug: string }
          ) => Promise<Product[] | undefined>;
        };
      }
    | {
        Query: {
          getProductCategories: () => Promise<ProductCategory[] | undefined>;
          getProductCategory: (
            _root: unknown,
            { slug, id }: { slug: string; id: string }
          ) => Promise<ProductCategory | null | undefined>;
        };
      }
    | {
        Query: {
          getImages: (
            _root: unknown,
            {
              slug,
              // server.applyMiddleware({app, path: '/graphql'});
              productId,
            }: { slug: string; productId: string }
          ) => Promise<Image[] | undefined>;
        };
      }
    | {
        Query: {
          getUsers: () => Promise<User[] | undefined>;
          getUser: (
            _root: unknown,
            { id, username }: { id: string; username: string }
          ) => Promise<User | null | undefined>;
        };
      }
  )[]
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    introspection: true,
  });

  const app = express();
  await server.start();
  server.applyMiddleware({ app });
  // server.applyMiddleware({app, path: '/graphql'});

  app.get('/rest', function (_req, res) {
    res.json({ data: 'api working' });
  });

  const PORT = process.env.PORT || 5000;
  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};

void startApolloServer(typeDefs, resolvers);

// typeDefs: DocumentNode[],
// resolvers: {
//   Query: {
//     getPages: () => Promise<Page[]>;
//     getProducts: () => Promise<Product[]>;
//     getImages: () => Promise<Image[]>;
//     getProductCategories: () => Promise<ProductCategory[]>;
//   };
// }

// typeDefs: DocumentNode[],
// resolvers: (
//   | { Query: { getPages: () => Promise<Page[] | undefined> } }
//   | {
//       Query: {
//         getProducts: (
//           _root: unknown,
//           { slug }: { slug: string }
//         ) => Promise<Product[] | undefined>;
//       };
//     }
//   | {
//       Query: {
//         getProductCategories: () => Promise<ProductCategory[] | undefined>;
//       };
//     }
//   | { Query: { getImages: () => Promise<Image[] | undefined> } }
// )[]
