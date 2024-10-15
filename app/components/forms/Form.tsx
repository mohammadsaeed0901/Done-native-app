import { Formik, FormikHelpers } from 'formik';
import React, { ReactNode } from 'react';
import { LoginSchema } from '../../screens/LoginScreen';

interface AppFormPropsType {
    children: ReactNode;
    initialValues: any;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void;
    validationSchema: any
}

function AppForm({ children, initialValues, onSubmit, validationSchema }: AppFormPropsType) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
}

export default AppForm;