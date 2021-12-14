import { useField } from 'formik';
import React from 'react'
import { Dropdown, FormField, FormInput, Grid, GridRow } from 'semantic-ui-react';

export default function AKGDropdown({ ...params }) {
    const [field, meta] = useField(props);
    const placeHolder = `Select ${field.name}`
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
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
            </FormField>
        </div>
    )
}
