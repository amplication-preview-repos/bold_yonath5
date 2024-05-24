import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { FORMAT_TITLE_FIELD } from "../format/FormatTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Brand" source="brand.id" reference="Brand">
          <TextField source={BRAND_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <ReferenceField label="Format" source="format.id" reference="Format">
          <TextField source={FORMAT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
