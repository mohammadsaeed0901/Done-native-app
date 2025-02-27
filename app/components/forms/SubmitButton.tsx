import React from 'react';
import Button from '../Button';
import { useFormikContext } from 'formik';

function SubmitButton({ title }: { title: string }) {
    const { handleSubmit } = useFormikContext()

    return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;