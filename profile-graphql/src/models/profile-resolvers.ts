import createProfile from "../controllers/createProfile";
import { Profile } from "./profile-model";

const resolvers = {
  Query: {
    getProfileById: async (parent: any, args: any) => {
      const profile = await Profile.findById(args.id);
    }
  },
  Mutation: {
    createProfile: async (_: any, args: any, context: any) => {
      return await createProfile();
    },
  },
};

export default resolvers;
