import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { FormatTitle } from "../format/FormatTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="brand.id" reference="Brand" label="Brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="format.id" reference="Format" label="Format">
          <SelectInput optionText={FormatTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Create>
  );
};
