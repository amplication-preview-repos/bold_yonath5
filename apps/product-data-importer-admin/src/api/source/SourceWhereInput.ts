import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SourceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
