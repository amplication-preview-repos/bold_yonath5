import { Product } from "../product/Product";

export type Format = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  typeField: string | null;
  updatedAt: Date;
};
