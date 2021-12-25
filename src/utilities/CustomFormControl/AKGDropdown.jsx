import { Field } from 'formik';
import React from 'react'

export default function AKGDropdown(props) {

    //const [field, meta] = useField(props);

    const { label, name, options, ...rest } = props;

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='select'  name={name} {...rest}>
                {options.map(option => {
                    return (
                        <option key={option.key} value={option.value}>
                            {option.text}
                        </option>
                    )
                })
                }
            </Field>
        </div>
    )
}




        //     <div>
        //     <FormSelect {...field} {...props} search selection></FormSelect>
        // </div>