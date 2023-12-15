import { buildSchema } from 'graphql';

const graphqlSchema = buildSchema(`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        confirmPassword: String!
        createdAt: String!
        updatedAt: String!
        passwordChangedAt: String!
        passwordResetToken: String!
        passwordResetExpires: String!
        active: Boolean!
    }
    
    input UserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        confirmPassword: String!
        createdAt: String!
        updatedAt: String!
        passwordChangedAt: String!
        passwordResetToken: String!
        passwordResetExpires: String!
        active: Boolean!
    }
    
    type RootQuery {
        users: [User!]!
    }
    
    type RootMutation {
        createUser(userInput: UserInput): User
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);

export default graphqlSchema;