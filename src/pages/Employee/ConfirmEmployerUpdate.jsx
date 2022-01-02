import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';
import EmployerUpdateService from '../../services/employerUpdateService';
import EmployerConfirmationService from '../../services/employerConfirmationService';
import { toast } from 'react-toastify';

export default function ConfirmEmployerUpdate() {

    let { id } = useParams();
    let employerUpdateService = new EmployerUpdateService();
    let employerConfirmationService = new EmployerConfirmationService();

    const [employerUpdates, setEmployerUpdates] = useState([]);

    useEffect(() => {
        employerUpdateService.findByactiveTrue().then(result => setEmployerUpdates(result.data.data))
    }, [])

    const onSubmit = (values) => {
        let employerConfirmationDto = {
            is_confirmed: true,
            employee: { id: id },
            employer: { id: values.id },
        }
        employerConfirmationService.update(employerConfirmationDto);
        toast.success(`${values.companyName} başarı ile silinmiştir.`)
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>companyName</Table.HeaderCell>
                        <Table.HeaderCell>email</Table.HeaderCell>
                        <Table.HeaderCell>firmPhone</Table.HeaderCell>
                        <Table.HeaderCell>firmWebSite</Table.HeaderCell>
                        <Table.HeaderCell>active</Table.HeaderCell>
                        <Table.HeaderCell>#</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        employerUpdates.map((employerUpdate) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={employerUpdate.id} >
                                <Table.Cell>{employerUpdate.companyName}</Table.Cell>
                                <Table.Cell>{employerUpdate.email}</Table.Cell>
                                <Table.Cell>{employerUpdate.firmPhone}</Table.Cell>
                                <Table.Cell>{employerUpdate.firmWebSite}</Table.Cell>
                                <Table.Cell>{employerUpdate.active ? "True" : "False"}</Table.Cell>
                                <Table.Cell>
                                    <Button basic color='green' onClick={()=>onSubmit(employerUpdate)}>Onayla</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
