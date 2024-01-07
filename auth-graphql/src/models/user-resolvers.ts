import { currentUser, signIn, signOut, signUp } from '../controllers';
import { User } from './user-model';
import { currentUserMiddleware } from '../middlewares';

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find();
      return users;
    },
    getUserById: async (parent: any, args: any) => {
      const user = await User.findById(args.id);
      return user;
    },
    currentUser: async (_: any, args: any, context: any) => {
      await currentUserMiddleware(context.req, context.res, () => {});
      return await currentUser(context);
    },
  },
  Mutation: {
    signUp: async (_: any, args: any, context: any) => {
      return await signUp(args, context);
    },
    signIn: async (_: any, args: any, context: any) => {
      return await signIn(args, context);
    },
    signOut: async (_: any, args: any, context: any) => {
      return signOut(context);
    },
  },
};

export default resolvers;
