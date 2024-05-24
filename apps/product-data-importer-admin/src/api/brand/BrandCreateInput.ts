import { ProductCreateNestedManyWithoutBrandsInput } from "./ProductCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  description?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutBrandsInput;
};
