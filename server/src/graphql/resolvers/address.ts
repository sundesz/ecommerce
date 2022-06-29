import { Address } from '../../db/models';
import { AddressInput } from 'db/types';

export default {
  Query: {
    getAddress: async (userId: string) => {
      try {
        return await Address.findOne({ where: { userId } });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
  Mutation: {
    createAddress: async (
      _root: unknown,
      { userId, email, street, city, postcode }: AddressInput
    ) => {
      try {
        console.log(userId, email, street, city, postcode);

        return await Address.create({ userId, email, street, city, postcode });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
