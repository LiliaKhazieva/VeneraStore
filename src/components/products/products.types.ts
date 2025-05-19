export interface IProduct {
  id: string;
  url?: string;
  price?: number;
  title?: string;
  category?: number;
  brand?: string;
}

export type TypePaginationProduct = {
  length: number;
  products: IProduct[];
};
