import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FormatWhereUniqueInput } from "../format/FormatWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  brand?: BrandWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  format?: FormatWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
