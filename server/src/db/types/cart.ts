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
