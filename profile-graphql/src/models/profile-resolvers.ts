import updateProfile from "../controllers/updateProfile";
import { requireAuth } from "../middlewares";
import { Profile } from "./profile-model";

const resolvers = {
  Query: {
    getProfileById: async (parent: any, args: any) => {
      const profile = await Profile.findById(args.id);
    }
  },
  Mutation: {
    updateProfile: async (_: any, args: any, context: any) => {
      const currentUser = await requireAuth(context.req);
      return await updateProfile(currentUser, args, context.req, context.res);
    },
  },
};

export default resolvers;
