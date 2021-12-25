import { useField } from 'formik';
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function AKGTextInput({ ...props }) {

    const [field, meta] = useField(props);

    const { name, label, ...rest } = props;

    console.log(field.value);
    console.log(meta);

    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <label htmlFor={name}>{label}</label>
                <input {...field} {...rest} />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </FormField>
        </div>
    )
}