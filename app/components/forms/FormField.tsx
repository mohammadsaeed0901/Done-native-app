import React from 'react';
import TextInput, { type AppTextInputPropsType } from '../TextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';
import { type DimensionValue } from 'react-native';

interface AppFieldFormPropsType extends AppTextInputPropsType {
    name: string;
    width?: DimensionValue | undefined;
}

function AppFieldForm({ name, width, ...otherProps }: AppFieldFormPropsType) {
    const { errors, touched, setFieldTouched, setFieldValue, values } = useFormikContext();

    return (
        <>
            <TextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage errorMsg={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFieldForm;