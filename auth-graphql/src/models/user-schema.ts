import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
    }
    
    input UserInput {
        firstName: String
        lastName: String
        email: String
        password: String
        confirmPassword: String
    }

    type SignUpResponse {
        message: String
        user: User
        token: String
    }
    
    type Mutation {
        signUp(firstName: String, lastName: String, email: String, password: String, confirmPassword: String): SignUpResponse
        signIn(email: String, password: String): SignUpResponse
        signOut: String
    }

    type Query {
        getUserById(userId: ID): User
        getAllUsers: [User]
    }
`;

export default typeDefs;
