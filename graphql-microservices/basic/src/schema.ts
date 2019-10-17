import { gql } from 'apollo-server';
import { Photon } from '@generated/photon';
import { Class } from './models';

export const db = new Photon();

export const typeDefs = gql`
    type Class {
        id: Int!
        title: String!
        description: String!
        lessons: [ClassLesson!]!
    }

    type ClassLesson {
        id: Int!
        title: String!
        description: String!
    }

    type Query {
        class(id: Int): Class
        classes: [Class!]!
    }
`;

export const resolvers = {
    Query: {
        class(root: any, { id }) {
            return db.classes.findOne({
                where: { id }
            });
        },
        classes() {
            return db.classes.findMany();
        }
    },
    Class: {
        lessons(root: Class) {
            return db.classLessons.findMany({
                where: {
                    class: {
                        id: root.id
                    }
                }
            })
        }
    }
}