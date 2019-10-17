import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
    serviceList: [
        { name: 'classes', url: 'http://localhost:3001' },
        { name: 'lessons', url: 'http://localhost:3002'}
    ]
})

const server = new ApolloServer({ gateway, subscriptions: false });

server.listen({ port: 3000 }).then(({ url }) => {
    console.log(`Gateway listening @ ${url}`);
})