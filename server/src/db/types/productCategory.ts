export interface IProductCategoryAttributes {
  id: string;
  categoryName: string;
  urlKey?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductCategoryInput = Omit<IProductCategoryAttributes, 'id'>;
