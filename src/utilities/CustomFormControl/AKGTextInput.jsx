import { useField } from 'formik';
import React from 'react'
import { FormField, FormInput, Label } from 'semantic-ui-react';

export default function AKGTextInput({ ...props }) {

    const [field, meta] = useField(props);

    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <div>
                    <FormInput {...field} {...props} />
                    {meta.touched && !!meta.error ? (
                        <Label pointing basic color="red" content={meta.error}></Label>
                    ) : null}
                </div>
            </FormField>
        </div>
    )
}