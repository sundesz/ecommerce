import { AddressInput } from './address';

export interface IUserAttributes {
  id: string;
  name: string;
  isAdmin?: boolean;
  isDisabled?: boolean;
  username: string;
  password: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserInput {
  name: string;
  isAdmin?: boolean;
  isDisabled?: boolean;
  username: string;
  password: string;
  address: AddressInput;
}

export interface IUserUpdateInput {
  userId?: string;
  name?: string;
  username?: string;
  password?: string;
  isAdmin?: boolean;
  isDisabled?: boolean;
}

export type UserInput = Omit<IUserAttributes, 'id'>;
