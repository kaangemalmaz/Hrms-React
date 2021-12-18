import { Field, useField } from 'formik';
import React from 'react'
import { FormField } from 'semantic-ui-react';

export default function AKGDropdown({ ...props }) {

    const [field, meta] = useField(props);

    const { name, label, options, ...rest } = props;

    return (
        <div>
            <FormField>
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
            </FormField>
        </div>
    )
}



{/* <FormField error={meta.touched && !!meta.error}>
<Grid>
    <GridRow>
        <Grid.Column width={4}><Label> {field.name} :</Label></Grid.Column>
        <Grid.Column width={12}>
            <FormInput {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}

            <Dropdown
                placeholder =  {placeHolder}
                fluid
                selection
                options={typeofWorkOptions}
            />


        </Grid.Column>
    </GridRow>
</Grid>
</FormField> */}

{/* <FormField error={meta.touched && !!meta.error}>
                <FormSelect {...field} {...props}
                // onChange={(event, data) => handleChange("city", data.value)}
                // value={formik.values.city}
                />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </FormField> */}