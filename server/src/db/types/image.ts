export interface IImageAttributes {
  id: string;
  productId?: string;
  productCategoryId?: string;
  name: string;
  fileLocation: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IImageSearchAttributes {
  productId?: string;
  productUrlKey?: string;
  productCategoryId?: string;
  productCategoryUrlKey?: string;
}

export type ImageInput = Omit<IImageAttributes, 'id'>;
