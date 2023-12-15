import mongoose from 'mongoose';

import { UserAttrs, UserModal, UserDoc } from '../types/userModalType';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModal>('User', userSchema);

export { User };


// import {
//   graphql,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString,
// } from 'graphql';

// const userSchema: GraphQLSchema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'User',
//     fields: {
//       firstName: { type: GraphQLString },
//       lastName: { type: GraphQLString },
//       email: { type: GraphQLString },
//       password: { type: GraphQLString },
//       confirmPassword: { type: GraphQLString },
//       createdAt: { type: GraphQLString },
//       updateAt: { type: GraphQLString },
//       passwordChangedAt: { type: GraphQLString },
//       passwordResetToken: { type: GraphQLString },
//       passwordResetExpires: { type: GraphQLString },
//       active: { type: GraphQLString },      
//     },
//   }),
// });

// export default userSchema;