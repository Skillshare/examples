import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import { buildFederatedSchema } from '@apollo/federation';

const schema = buildFederatedSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

server.listen({ port: 3001 }).then(({ url }) => {
    console.log(`Classes service listening @ ${url}`);
})