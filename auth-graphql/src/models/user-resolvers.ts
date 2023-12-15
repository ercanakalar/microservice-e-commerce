import { User } from './user-model';

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
    user: async (parent: any, args: any) => {
      const user = await User.findById(args.id);
      return user;
    },
  },
  Mutation: {
    createUser: async (parent: any, args: any) => {
      const newUser = User.build({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
        confirmPassword: args.confirmPassword,
      });
      await newUser.save();
      return newUser;
    },
    updateUser: async (parent: any, args: any) => {
      const user = await User.findByIdAndUpdate(args.id, args, { new: true });
      return user;
    },
    deleteUser: async (parent: any, args: any) => {
      const user = await User.findByIdAndDelete(args.id);
      return user
    },
  },
};

export default resolvers;