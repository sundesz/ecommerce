export interface ISessionAttributes {
  sid: string;
  userId?: string;
  isValid: boolean;
  data?: string;
  expires?: Date;
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type SessionInput = Omit<ISessionAttributes, 'sid'>;

export interface ILogin {
  username: string;
  password: string;
}
