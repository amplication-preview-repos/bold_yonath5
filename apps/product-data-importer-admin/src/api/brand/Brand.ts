import { Product } from "../product/Product";

export type Brand = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
