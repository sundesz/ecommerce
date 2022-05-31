export interface IProductImageAttributes {
  id: string;
  productId: string;
  imageName: string;
  fileLocation: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductImageInput = Omit<IProductImageAttributes, 'id'>;
