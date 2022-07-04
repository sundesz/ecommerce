export interface IAddressAttributes {
  id: string;
  userId: string;
  email: string;
  street: string;
  city: string;
  postcode: string;
  countrycode?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// export interface IAddressInput extends Optional<IAddress, 'id'> {}
export type AddressInput = Omit<IAddressAttributes, 'id'>;

export interface IAddressUpdateAttributes {
  userId: string;
  email?: string;
  street?: string;
  city?: string;
  postcode?: string;
  countrycode?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
