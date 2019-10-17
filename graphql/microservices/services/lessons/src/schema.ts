import { gql } from 'apollo-server';
import { Photon } from '@generated/photon';

export const db = new Photon();

export const typeDefs = gql`
    type ClassLesson @key(fields: "id") {
        id: Int!
        title: String!
        description: String!
    }
`;

export const resolvers = {
    ClassLesson: {
        __resolveReference({ id }) {
            return db
                .classLessons
                .findOne({ 
                    where: { id } 
                });
        }
    }
}
