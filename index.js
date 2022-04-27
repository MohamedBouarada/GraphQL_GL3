import { GraphQLServer } from 'graphql-yoga'
import { Query } from './resolvers/Query.js'
import { Student } from './resolvers/Student.js'
import {Todo} from "./resolvers/Todo.js";
import {User} from "./resolvers/User.js";
import { db } from "./data/db.js";
// ... or using "require()"
// const { GraphQLServer } = require('graphql-yoga')
const typeDefs = "schema/schema.graphql";
const resolvers = {
    Query,
    Student,
    Todo,
    User
};
const context = {
    db
}
const server = new GraphQLServer({ typeDefs, resolvers,context })
server.start(() => console.log('Server is running on localhost:4000'))
