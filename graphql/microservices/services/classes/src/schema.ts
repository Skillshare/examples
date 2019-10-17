import { gql } from 'apollo-server';
import { Photon } from '@generated/photon';
import { Class } from './models';

export const db = new Photon();

export const typeDefs = gql`
    type Class @key(fields: "id") {
        id: Int!
        title: String!
        description: String!
        lessons: [ClassLesson!]!
    }

    extend type ClassLesson @key(fields: "id") {
        id: Int! @external
    }

    extend type Query {
        class(id: Int!): Class!
    }
`;

export const resolvers = {
    Query: {
        async class(root: any, { id }) {
            return await db.classes.findOne({
                where: { id }
            });
        }
    },
    Class: {
        async lessons(root: Class) {
            return await db.classLessons.findMany({
                where: {
                    class: {
                        id: root.id
                    }
                }
            })
        }
    }
}