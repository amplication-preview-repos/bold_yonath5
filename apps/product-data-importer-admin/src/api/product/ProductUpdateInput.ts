import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FormatWhereUniqueInput } from "../format/FormatWhereUniqueInput";

export type ProductUpdateInput = {
  brand?: BrandWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  format?: FormatWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
