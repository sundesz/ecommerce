export interface IProductAttributes {
  id: string;
  productCategoryId: string;
  name: string;
  description: string;
  ean: string;
  price: number;
  quantity: number;
  urlKey?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IProductInput {
  productCategory: string;
  name: string;
  description: string;
  ean: string;
  price: number;
  quantity: number;
  image: string;
  imageLocation: string;
}

export type ProductInput = Omit<IProductAttributes, 'id'>;
