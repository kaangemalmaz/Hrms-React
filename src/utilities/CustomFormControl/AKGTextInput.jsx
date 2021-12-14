import { useField } from 'formik';
import React from 'react'
import { FormField, FormInput, Grid, GridRow, Label } from 'semantic-ui-react';

export default function AKGTextInput({ ...props }) {

    const [field, meta] = useField(props);

    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                {/* <Grid> */}
                    {/* <GridRow> */}
                        {/* <Grid.Column width={4}><Label> {field.name} :</Label></Grid.Column>
                        <Grid.Column width={12}>
                            <FormInput {...field} {...props} />
                            {meta.touched && !!meta.error ? (
                                <Label pointing basic color="red" content={meta.error}></Label>
                            ) : null}
                        </Grid.Column> */}

                        <div>
                            <Label> {field.name} :</Label>
                            <br /><br />
                            <FormInput {...field} {...props} />
                            {meta.touched && !!meta.error ? (
                                <Label pointing basic color="red" content={meta.error}></Label>
                            ) : null}
                        </div>
                    {/* </GridRow> */}
                {/* </Grid> */}
            </FormField>
        </div>
    )
}
