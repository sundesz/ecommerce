export interface IProductCategoryAttributes {
  id: string;
  name: string;
  urlKey?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductCategoryInput = Omit<IProductCategoryAttributes, 'id'>;
