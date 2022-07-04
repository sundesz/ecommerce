import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import {
  Address,
  Page,
  Product,
  ProductCategory,
  Image,
  User,
  Cart,
} from 'db/models';
import {
  AddressInput,
  PageInput,
  IPageAttributes,
  IProductInput,
  IProductCategoryInput,
  IImageSearchAttributes,
  IUserInput,
  ICartInputAttributes,
  ICartUpdateAttributes,
  IAddressUpdateAttributes,
  IImageAttributes,
  IProductUpdateInput,
  IUserUpdateInput,
} from 'db/types';

const startApolloServer = async (
  typeDefs: DocumentNode[],
  resolvers: (
    | {
        Query: {
          getAddress: (
            _root: unknown,
            { userId }: { userId: string }
          ) => Promise<Address | null | undefined>;
        };
        Mutation: {
          createAddress: (
            _root: unknown,
            { userId, email, street, city, postcode }: AddressInput
          ) => Promise<Address | undefined>;
          updateAddress: (
            _root: unknown,
            { userId, email, street, city, postcode }: IAddressUpdateAttributes
          ) => Promise<Address | undefined>;
        };
      }
    | {
        Query: {
          getPages: () => Promise<Page[] | undefined>;
          getPage: (
            _root: unknown,
            { slug, id }: { slug: string; id: string }
          ) => Promise<Page | null | undefined>;
        };
        Mutation: {
          createPage: (
            _root: unknown,
            { name, content, status, urlKey }: PageInput
          ) => Promise<Page | undefined>;
          updatePage: (
            _root: unknown,
            { id, name, content, status, urlKey }: IPageAttributes
          ) => Promise<Page | undefined>;
          deletePage: (
            _root: unknown,
            { id }: { id: string }
          ) => Promise<number | undefined>;
        };
      }
    | {
        Query: {
          getProducts: (
            _root: unknown,
            { slug }: { slug: string }
          ) => Promise<Product[] | undefined>;
        };
        Mutation: {
          createProduct: (
            _root: unknown,
            args: IProductInput
          ) => Promise<Product | undefined>;
          updateProduct: (
            _root: unknown,
            args: IProductUpdateInput
          ) => Promise<Product>;
        };
      }
    | {
        Query: {
          getProductCategories: () => Promise<ProductCategory[] | undefined>;
          getProductCategory: (
            _root: unknown,
            {
              slug,
              id,
            }: {
              slug: string;
              id: string;
            }
          ) => Promise<ProductCategory | null | undefined>;
        };
        Mutation: {
          createProductCategory: (
            _root: unknown,

            { input }: { input: IProductCategoryInput }
          ) => Promise<ProductCategory | undefined>;
        };
      }
    | {
        Query: {
          getImages: (
            _root: unknown,
            {
              productId,
              productUrlKey,
              productCategoryId,
              productCategoryUrlKey,
            }: IImageSearchAttributes
          ) => Promise<Image[] | undefined>;
        };
        Mutation: {
          createImage: (
            _root: unknown,
            {
              productId,
              productCategoryId,
              name,
              fileLocation,
            }: IImageAttributes
          ) => Promise<Image | undefined>;
          updateImage: (
            _root: unknown,
            {
              productId,
              productCategoryId,
              name,
              fileLocation,
            }: IImageAttributes
          ) => Promise<Image | undefined>;
        };
      }
    | {
        Query: {
          count: () => Promise<number | undefined>;
          getUsers: () => Promise<User[] | undefined>;
          getUser: (
            _root: unknown,
            { id, username }: { id: string; username: string }
          ) => Promise<User | null | undefined>;
        };
        Mutation: {
          createUser: (
            _root: unknown,
            { input }: { input: IUserInput }
          ) => Promise<User | undefined>;
          updateUser: (
            _root: unknown,
            { input }: { input: IUserUpdateInput }
          ) => Promise<User | undefined>;
        };
      }
    | {
        Query: {
          getCart: (
            _root: unknown,
            { cartId }: { cartId: string }
          ) => Promise<Cart | null | undefined>;
        };
        Mutation: {
          createCart: (
            _root: unknown,
            { input }: { input: ICartInputAttributes }
          ) => Promise<Cart | undefined>;
          updateCart: (
            _root: unknown,
            { updateInput }: { updateInput: ICartUpdateAttributes }
          ) => Promise<Cart | null | undefined>;
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
