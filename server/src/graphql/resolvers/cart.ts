import { Cart, CartProduct, Product } from '../../db/models';
import { ICartInputAttributes, ICartUpdateAttributes } from '../../db/types';

export default {
  Query: {
    getCart: async (_root: unknown, { cartId }: { cartId: string }) => {
      try {
        // create a nested include in Sequelize
        // https://sebhastian.com/sequelize-nested-include/
        return await Cart.findOne({
          where: { id: cartId },
          include: [
            {
              model: CartProduct,
              include: [{ model: Product }],
            },
          ],
          order: [[CartProduct, 'updatedAt', 'DESC']],
        });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },

  Mutation: {
    createCart: async (
      _root: unknown,
      { input }: { input: ICartInputAttributes }
    ) => {
      try {
        const cart = await Cart.create({
          userId: input.userId,
          status: input.status,
          email: input.email,
          userAgent: input.userAgent,
          ipAddress: input.ipAddress,
        });

        const product = input.cartProduct;

        await CartProduct.create({
          cartId: cart.id,
          productId: product.productId,
          price: product.price,
          quantity: product.quantity,
        });

        return cart;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    updateCart: async (
      _root: unknown,
      { updateInput }: { updateInput: ICartUpdateAttributes }
    ) => {
      try {
        const cart = await Cart.findOne({
          where: { id: updateInput.cartId, status: 'pending' },
          include: {
            model: CartProduct,
          },
        });

        if (!cart) {
          return null;
        }

        if (updateInput.status || updateInput.email) {
          await cart.update({
            email: updateInput.email ?? cart.email,
            status: updateInput.status ?? cart.status,
          });
        }

        if (!updateInput.cartProduct) {
          return cart;
        }

        const cartProduct = await CartProduct.findOne({
          where: {
            cartId: updateInput.cartId,
            productId: updateInput.cartProduct.productId,
          },
        });

        if (cartProduct) {
          await cartProduct.update({
            price: updateInput.cartProduct.price,
            quantity: updateInput.cartProduct.quantity,
          });
        } else {
          await CartProduct.create({
            cartId: updateInput.cartId,
            productId: updateInput.cartProduct.productId,
            price: updateInput.cartProduct.price,
            quantity: updateInput.cartProduct.quantity,
          });
        }

        return cart;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
