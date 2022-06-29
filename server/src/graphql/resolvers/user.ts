import { IUserInput } from 'db/types';
import { Address, User } from '../../db/models';

export default {
  Query: {
    count: async () => {
      try {
        return await User.count();
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    getUsers: async () => {
      try {
        return await User.findAll({
          include: [{ model: Address }],
          order: [['updatedAt', 'DESC']],
        });
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
    createUser: async (_root: unknown, inputs: IUserInput) => {
      try {
        const user = await User.create({
          name: inputs.name,
          username: inputs.username,
          password: inputs.password,
          isDisabled: inputs.isDisabled,
          isAdmin: inputs.isAdmin,
        });

        if (inputs.address) {
          await Address.create({ ...inputs.address, userId: user.id });
        }

        return user;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
