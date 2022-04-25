import { GraphQLServer } from 'graphql-yoga'
import { Query } from './resolvers/Query.js'
import { Student } from './resolvers/Student.js'
// ... or using "require()"
// const { GraphQLServer } = require('graphql-yoga')
const typeDefs = "schema/schema.graphql";
const resolvers = {
    Query,
    Student
};
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
