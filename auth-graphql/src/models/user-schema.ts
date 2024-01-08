import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
    }
    type SignUpResponse {
        message: String
        user: User
        token: String
    }
    
    type CurrentUser {
        id: ID
        email: String
    }
    type CurrentUserResponse {
        message: String
        user: CurrentUser
        token: String
    }
    
    type Mutation {
        signUp(firstName: String, lastName: String, email: String, password: String, confirmPassword: String): SignUpResponse
        signIn(email: String, password: String): SignUpResponse
        signOut: String
        updatePassword(currentPassword: String, newPassword: String, confirmNewPassword: String): String
    }

    type Query {
        getUserById(userId: ID): User
        getAllUsers: [User]
        currentUser: CurrentUserResponse
    }
`;

export default typeDefs;
