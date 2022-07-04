import { Address } from '../../db/models';
import { AddressInput, IAddressUpdateAttributes } from '../../db/types';

export default {
  Query: {
    getAddress: async (_root: unknown, { userId }: { userId: string }) => {
      try {
        const address = await Address.findOne({ where: { userId } });

        return address;
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
        const address = await Address.findOne({ where: { userId } });

        if (address) {
          throw new Error('Address already exists');
        }

        return await Address.create({ userId, email, street, city, postcode });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    updateAddress: async (
      _root: unknown,
      { userId, email, street, city, postcode }: IAddressUpdateAttributes
    ) => {
      try {
        const address = await Address.findOne({ where: { userId } });

        if (address) {
          return await address.update({
            email: email ?? address.email,
            street: street ?? address.street,
            city: city ?? address.city,
            postcode: postcode ?? address.postcode,
          });
        }

        throw new Error('User not found');
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
