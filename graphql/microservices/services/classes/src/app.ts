import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import { typeDefs, resolvers } from './schema';

const schema = buildFederatedSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

server.listen({ port: 3001 }).then(({ url }) => {
    console.log(`Classes service listening @ ${url}`);
})