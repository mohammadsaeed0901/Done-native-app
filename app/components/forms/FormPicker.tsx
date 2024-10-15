import React, { type ElementType } from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";
import { type DimensionValue } from "react-native";

interface AppFormPickerPropsType {
  items: any[];
  name: string;
  placeholder: string;
  PickerItemComponent?: ElementType;
  numberOfColumns?: number;
  width?: DimensionValue | undefined;
}

function AppFormPicker({
  items,
  name,
  width,
  placeholder,
  numberOfColumns,
  PickerItemComponent,
}: AppFormPickerPropsType) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;