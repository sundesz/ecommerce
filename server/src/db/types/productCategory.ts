export interface IProductCategoryAttributes {
  id: string;
  name: string;
  urlKey?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IProductCategoryInput {
  name: string;
  urlKey?: string;
  createdAt?: Date;
  updatedAt?: Date;
  image?: string;
  imageLocation?: string;
}

export type ProductCategoryInput = Omit<IProductCategoryAttributes, 'id'>;
