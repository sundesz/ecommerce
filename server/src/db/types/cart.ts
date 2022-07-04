export type CartStatus = 'sold' | 'pending' | 'canceled';

export enum CartStatusText {
  'SOLD' = 'sold',
  'PENDING' = 'pending',
  'CANCELED' = 'canceled',
}

export interface ICartAttributes {
  id?: string;
  sessionId?: string;
  userId?: string;
  email?: string;
  userAgent: string;
  ipAddress: string;
  status: CartStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CartInput = Omit<ICartAttributes, 'id'>;

export interface ICartProductAttributes {
  cartId: string;
  productId: string;
  price: number;
  quantity: number;
}

export interface ICartInputAttributes {
  sessionId?: string;
  userId: string;
  userAgent: string;
  ipAddress: string;
  status: CartStatus;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
  cartProduct: ICartProductAttributes;
}

export interface ICartUpdateAttributes {
  cartId: string;
  status?: CartStatus;
  email?: string;
  cartProduct?: ICartProductAttributes;
}
