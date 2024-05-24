import { Format as TFormat } from "../api/format/Format";

export const FORMAT_TITLE_FIELD = "typeField";

export const FormatTitle = (record: TFormat): string => {
  return record.typeField?.toString() || String(record.id);
};
