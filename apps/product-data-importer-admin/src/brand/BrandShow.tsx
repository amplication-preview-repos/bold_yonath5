import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BRAND_TITLE_FIELD } from "./BrandTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { FORMAT_TITLE_FIELD } from "../format/FormatTitle";

export const BrandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Product"
          target="brandId"
          label="Products"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Format"
              source="format.id"
              reference="Format"
            >
              <TextField source={FORMAT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
