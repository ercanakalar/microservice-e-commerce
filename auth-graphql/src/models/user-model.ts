import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const userSchema: GraphQLSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'User',
    fields: {
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      confirmPassword: { type: GraphQLString },
      createdAt: { type: GraphQLString },
      updateAt: { type: GraphQLString },
      passwordChangedAt: { type: GraphQLString },
      passwordResetToken: { type: GraphQLString },
      passwordResetExpires: { type: GraphQLString },
      active: { type: GraphQLString },      
    },
  }),
});

export default userSchema;