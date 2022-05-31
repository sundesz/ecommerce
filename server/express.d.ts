// this doesn't work
import {
  ICartAttributes,
  IPageAttributes,
  IProductAttributes,
  IProductCategoryAttributes,
} from './src/db/types';

declare global {
  namespace Express {
    interface Request {
      page?: IPageAttributes | null;
      pageCategory?: IProductCategoryAttributes | null;
      product?: IProductAttributes | null;
      cart?: ICartAttributes | null;
    }
  }
}
