import { IPageAttributes, PageInput } from 'db/types';
import { Page } from '../../db/models';

export default {
  Query: {
    getPages: async () => {
      try {
        return await Page.findAll({ order: [['updatedAt', 'DESC']] });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    getPage: async (
      _root: unknown,
      { slug, id }: { slug: string; id: string }
    ) => {
      try {
        let where = {};

        if (slug) {
          where = { urlKey: slug };
        }

        if (id) {
          where = { id };
        }

        return await Page.findOne({ where });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },

  Mutation: {
    createPage: async (
      _root: unknown,
      { name, content, status, urlKey }: PageInput
    ) => {
      try {
        return await Page.create({ name, content, status, urlKey });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    updatePage: async (
      _root: unknown,
      { id, name, content, status, urlKey }: IPageAttributes
    ) => {
      try {
        const page = await Page.findOne({ where: { id } });
        if (page) {
          page.name = name ?? page.name;
          page.content = content ?? page.content;
          page.status = status ?? page.status;
          page.urlKey = urlKey ?? page.urlKey;

          return await page.save();
        }
        throw new Error('No page found');
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },

    deletePage: async (_root: unknown, { id }: { id: string }) => {
      try {
        return await Page.destroy({ where: { id } });
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
  },
};
