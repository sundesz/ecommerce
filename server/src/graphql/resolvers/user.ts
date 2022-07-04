import bcrypt from 'bcrypt';
import { IUserInput, IUserUpdateInput } from '../../db/types';
import { Address, User } from '../../db/models';
import { SALT_ROUND } from '../../config';

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
    createUser: async (_root: unknown, { input }: { input: IUserInput }) => {
      try {
        const user = await User.create({
          name: input.name,
          username: input.username,
          password: input.password,
          isDisabled: input.isDisabled ?? false,
          isAdmin: input.isAdmin ?? false,
        });

        if (input.address) {
          await Address.create({ ...input.address, userId: user.id });
        }

        return user;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    updateUser: async (
      _root: unknown,
      { input }: { input: IUserUpdateInput }
    ) => {
      try {
        if (!input.userId || !input.username) {
          throw new Error('Please provide user id or username');
        }

        const user = await User.findOne({
          where: { id: input.userId, username: input.username },
        });

        if (!user) {
          throw new Error('User not found');
        }

        let password = user.password;
        if (input.password) {
          password = await bcrypt.hash(input.password, SALT_ROUND);
        }

        return await user.update({
          name: input.name ?? user.name,
          username: input.username ?? user.username,
          password,
          isAdmin: input.isAdmin ?? user.isAdmin,
          isDisabled: input.isDisabled ?? user.isDisabled,
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
