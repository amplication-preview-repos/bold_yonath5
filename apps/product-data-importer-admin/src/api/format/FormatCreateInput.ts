import { ProductCreateNestedManyWithoutFormatsInput } from "./ProductCreateNestedManyWithoutFormatsInput";

export type FormatCreateInput = {
  products?: ProductCreateNestedManyWithoutFormatsInput;
  typeField?: string | null;
};
