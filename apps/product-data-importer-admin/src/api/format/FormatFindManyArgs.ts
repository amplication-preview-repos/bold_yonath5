import { FormatWhereInput } from "./FormatWhereInput";
import { FormatOrderByInput } from "./FormatOrderByInput";

export type FormatFindManyArgs = {
  where?: FormatWhereInput;
  orderBy?: Array<FormatOrderByInput>;
  skip?: number;
  take?: number;
};
