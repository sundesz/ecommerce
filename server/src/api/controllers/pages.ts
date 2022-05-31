import { NextFunction, RequestHandler } from 'express';
import Page from '../../db/models/page';
import { PageInput } from '../../db/types/page';
import slugify from 'slugify';
import { NOT_FOUND } from '../../utils/errorDescription';

const findByUrlKeyMiddleware: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const urlKey = req.query.urlkey as string;

    const page = await Page.findOne({ where: { urlKey } });

    if (!page) {
      return res.status(404).json({ error: NOT_FOUND });
    }

    req.page = page;

    next();
  } catch (error: unknown) {
    next(error);
  }
};

const findByIdMiddleware: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const { id } = req.params as { id: string };
    req.page = await Page.findByPk(id);

    if (!req.page) {
      return res.sendStatus(404);
    }

    next();
  } catch (error: unknown) {
    next(error);
  }
};

const getPage: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    console.log(req.session.isAuth);
    let where = {};

    const queryUrlkey = req.query.urlkey as string;

    if (queryUrlkey) {
      where = { urlKey: queryUrlkey };
    }

    const pages = await Page.findAll({ where });
    res.status(200).json(pages);
  } catch (error: unknown) {
    next(error);
  }
};

const create: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const { name, content, status } = req.body as PageInput;
    const page = await Page.create({
      name,
      content,
      urlKey: slugify(name),
      status,
    });

    res.json(page);
  } catch (error) {
    next(error);
  }
};

// TODO:: use token
const update: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const page = req.page as Page;
    const { name, content, status } = req.body as PageInput;

    page.name = name || page.name;
    page.content = content || page.content;
    page.urlKey = slugify(name);
    page.status = status || page.status;

    await page.save();

    res.json(page);
  } catch (error) {
    next(error);
  }
};

// TODO:: use token
const remove: RequestHandler = async (req, res, next: NextFunction) => {
  try {
    const page = req.page as Page;
    await page.destroy();
    res.status(204).end();
  } catch (error: unknown) {
    next(error);
  }
};

const getOnePage: RequestHandler = (req, res, next: NextFunction) => {
  try {
    res.json(req.page);
  } catch (error: unknown) {
    next(error);
  }
};

export default {
  findByIdMiddleware,
  findByUrlKeyMiddleware,
  getPage,
  getOnePage,
  create,
  update,
  remove,
};
