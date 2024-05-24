import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FormatWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
  typeField?: StringNullableFilter;
};
