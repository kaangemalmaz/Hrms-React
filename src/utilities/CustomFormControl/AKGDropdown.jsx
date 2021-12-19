import { useField } from 'formik';
import React from 'react'
import { FormSelect } from 'semantic-ui-react';

export default function AKGDropdown({ ...props }) {

    const [field, meta] = useField(props);

    return (
        <div>
            <FormSelect {...field} {...props} search selection></FormSelect>
        </div>
    )
}

{/* <FormField>
                <label htmlFor={label}>{label}</label>
                <Field as="select" name={name} id={name} {...rest}>
                    {
                        options.map(option => {
                            return (
                                <option key={option.key} value={option.value}>
                                    {option.text}
                                </option>
                                
                            )
                        })
                    }
                </Field>
            </FormField> */}