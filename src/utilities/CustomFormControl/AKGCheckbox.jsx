import { useField } from 'formik';
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function AKGCheckbox({ ...props }) {

    const [field, meta] = useField(props);

    const { name, label, ...rest } = props;

    return (
        <div>
        <FormField error={meta.touched && !!meta.error}>
            <label htmlFor={name}>{label}</label>
            <input type="checkbox" {...field} {...rest} checked={field.value} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    </div>
    )
}
