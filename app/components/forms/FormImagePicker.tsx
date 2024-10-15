import { StyleSheet } from 'react-native'
import React from 'react'
import ImageInputList from '../ImageInputList'
import  ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

export default function FormImagePicker({ name }: { name: string }) {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const imageUris = values[name];
  
  const handleAdd = (uri: string | null) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string | null) => {
    setFieldValue(name, imageUris.filter((imageUri: string) => imageUri !== uri));
  };

  return (
    <>
        <ImageInputList 
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
          />
        <ErrorMessage errorMsg={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})