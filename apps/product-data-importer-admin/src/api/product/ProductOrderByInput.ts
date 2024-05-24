import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brandId?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  formatId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
