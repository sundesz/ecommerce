import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import { Page, Product, ProductImage, ProductCategory } from 'db/models';
import { resolvers, typeDefs } from './schema';

const startApolloServer = async (
  typeDefs: DocumentNode,
  resolvers: {
    Query: {
      pages: () => Promise<Page[]>;
      products: () => Promise<Product[]>;
      productImages: () => Promise<ProductImage[]>;
      productCategories: () => Promise<ProductCategory[]>;
    };
  }
) => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const app = express();
  await server.start();
  server.applyMiddleware({ app });
  // server.applyMiddleware({app, path: '/graphql'});

  app.get('/rest', function (_req, res) {
    res.json({ data: 'api working' });
  });

  app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
  );
};

void startApolloServer(typeDefs, resolvers);
