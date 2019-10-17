import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import { buildFederatedSchema } from '@apollo/federation';

const schema = buildFederatedSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

server.listen({ port: 3002 }).then(({ url }) => { 
    console.log(`Class lessons service listening @ ${url}`);
})