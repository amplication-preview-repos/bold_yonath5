import { Brand } from "../brand/Brand";
import { Category } from "../category/Category";
import { Format } from "../format/Format";

export type Product = {
  brand?: Brand | null;
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  format?: Format | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
