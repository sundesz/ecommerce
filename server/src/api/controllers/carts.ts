import { RequestHandler, NextFunction } from 'express';
import { Cart } from '../../db/models';
import { CartStatusText } from '../../db/types/cart';

const findIdByMiddleware: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id } = req.params as { id: string };
    const cart = await Cart.findByPk(id);

    if (!cart) {
      return res.sendStatus(404);
    }

    req.cart = cart;

    next();
  } catch (error: unknown) {
    next(error);
  }
};

const getAllActiveCart: RequestHandler = async (
  _req,
  res,
  next: NextFunction
) => {
  try {
    const cart = await Cart.findAll({
      where: { status: CartStatusText.PENDING },
    });

    res.json(cart);
  } catch (error: unknown) {
    next(error);
  }
};

const getCart: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    // let where = {};

    const { id, userId, sessionId } = req.params as {
      id: string;
      userId: string;
      sessionId: string;
    };

    const cart = await Cart.findOne({
      where: { id, userId, sessionId },
    });

    res.json(cart);
  } catch (error: unknown) {
    next(error);
  }
};

// const getCart: RequestHandler = async(req, res, next:NextFunction) => {
//   try {

//   } catch (error:unknown) {
//     next(error)
//   }
// }

// const create: RequestHandler = async(req, res, next:NextFunction) => {
//   try {

//   } catch (error:unknown) {
//     next(error)
//   }
// }

// const update: RequestHandler = async(req, res, next:NextFunction) => {
//   try {

//   } catch (error:unknown) {
//     next(error)
//   }
// }

// const remove: RequestHandler = async(req, res, next:NextFunction) => {
//   try {

//   } catch (error:unknown) {
//     next(error)
//   }
// }

export default {
  getAllActiveCart,
  getCart,
  //create,
  //update,
  //remove,
  findIdByMiddleware,
};
