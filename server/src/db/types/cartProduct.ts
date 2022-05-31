export interface ICartProductAttributes {
  id: string;
  cartId: string;
  productId: string;
  price: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CartProductInput = Omit<ICartProductAttributes, 'id'>;
