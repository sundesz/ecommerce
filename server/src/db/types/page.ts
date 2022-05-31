export type PageStatus = 'header' | 'menu' | 'footer';

export interface IPageAttributes {
  id: string;
  name: string;
  content: string;
  urlKey?: string;
  status: PageStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export type PageInput = Omit<IPageAttributes, 'id'>;
