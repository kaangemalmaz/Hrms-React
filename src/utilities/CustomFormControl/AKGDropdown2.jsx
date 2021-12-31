import { useField } from 'formik';
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function AKGDropdown2({ ...props }) {

    const [field, meta] = useField(props);

    const { name, label, options, defaultOption, ...rest } = props;

    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <label htmlFor={name}>{label}</label>
                <select {...field} {...rest}  >
                    <option value="">
                        {defaultOption}
                    </option>
                    {options.map(option => {
                        return (
                            <option key={option.key} value={option.value}>
                                {option.text}
                            </option>
                        );
                    })};
                </select>
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </FormField>
        </div>
    )

    // return <FormSelect {...field} {...props} search selection></FormSelect>;
}