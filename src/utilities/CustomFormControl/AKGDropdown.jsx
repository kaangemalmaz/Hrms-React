import { useField } from 'formik';
import React from 'react'
import { FormField, FormSelect, Label } from 'semantic-ui-react';

export default function AKGDropdown({ ...props }) {
    
    const [field, meta] = useField(props);

    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <FormSelect {...field} {...props}
                // onChange={(event, data) => handleChange("city", data.value)}
                // value={formik.values.city}
                />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
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