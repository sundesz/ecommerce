import http from 'http';
import app from './app';
import { PORT } from './config';
import { connectToDatabase } from './db';

const server = http.createServer(app);

const start = async () => {
  await connectToDatabase();
  server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
};

void start();

// const persons = [
//   {
//     name: 'Arto Hellas',
//     phone: '040-123543',
//     street: 'Tapiolankatu 5 A',
//     city: 'Espoo',
//     id: '3d594650-3436-11e9-bc57-8b80ba54c431',
//   },
//   {
//     name: 'Matti Luukkainen',
//     phone: '040-432342',
//     street: 'Malminkaari 10 A',
//     city: 'Helsinki',
//     id: '3d599470-3436-11e9-bc57-8b80ba54c431',
//   },
//   {
//     name: 'Venla Ruuska',
//     street: 'Nallemäentie 22 C',
//     city: 'Helsinki',
//     id: '3d599471-3436-11e9-bc57-8b80ba54c431',
//   },
// ];

// const typeDefs = gql`
//   type Person {
//     name: String!
//     phone: String
//     street: String!
//     city: String!
//     id: ID!
//   }

//   type Query {
//     personCount: Int!
//     allPersons: [Person!]!
//     findPerson(name: String!): Person
//   }
// `;

// const resolvers = {
//   Query: {
//     personCount: () => persons.length,
//     allPersons: () => persons,
//     findPerson: (_, args) => persons.find((p) => p.name === args.name),
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
