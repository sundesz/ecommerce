export interface IImageAttributes {
  id: string;
  productId?: string;
  productCategoryId?: string;
  name: string;
  fileLocation: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ImageInput = Omit<IImageAttributes, 'id'>;
