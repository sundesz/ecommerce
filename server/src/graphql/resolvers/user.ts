import { UserInput } from 'db/types';
import { User } from '../../db/models';

export default {
  Query: {
    getUsers: async () => {
      try {
        return await User.findAll();
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    getUser: async (
      _root: unknown,
      { id, username }: { id: string; username: string }
    ) => {
      try {
        let where = {};

        if (id) {
          where = { id };
        }

        if (username) {
          where = { username };
        }

        return await User.findOne({
          where,
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },

  Mutation: {
    createUser: async (_root: unknown, inputs: UserInput) => {
      try {
        return await User.create({ ...inputs });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
