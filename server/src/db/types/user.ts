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

export type UserInput = Omit<IUserAttributes, 'id'>;
