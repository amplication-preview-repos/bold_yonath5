import { ProductUpdateManyWithoutBrandsInput } from "./ProductUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  description?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutBrandsInput;
};
