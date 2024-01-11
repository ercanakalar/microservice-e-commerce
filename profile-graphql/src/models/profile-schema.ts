import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Profile {
        id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        confirmPassword: String
    }
    type Mutation {
        updateProfile: String
    }

    type Query {
        getProfileById(profileId: ID): Profile
    }
`;

export default typeDefs;
