import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';
import EmployerUpdateService from '../../services/employerUpdateService';
import EmployerConfirmationService from '../../services/employerConfirmationService';
import { toast } from 'react-toastify';
import EmployerService from '../../services/employerService';

export default function ConfirmEmployerUpdate() {

    let { id } = useParams();
    let employerUpdateService = new EmployerUpdateService();
    let employerConfirmationService = new EmployerConfirmationService();
    let employerService = new EmployerService();

    const [employerUpdates, setEmployerUpdates] = useState([]);
    const [employerConfirmation, setEmployerConfirmation] = useState({});

    useEffect(() => {
        employerUpdateService.findByactiveTrue().then(result => setEmployerUpdates(result.data.data))
    }, [])

    const onSubmit = (values) => {
        employerConfirmationService.getByEmployerIdAndDate(values.employer.id).then(result => setEmployerConfirmation(result.data));
        console.log(employerConfirmation);
        console.log(employerConfirmation.data);

        if (employerConfirmation.success === true && employerConfirmation.data !== null) {
            let employerConfirmationUpd = {
                id: employerConfirmation.data.id,
                confirmed: true,
                employee: { id: id },
                employer: { id: values.employer.id }
            }
            employerConfirmationService.update(employerConfirmationUpd);
            
            let employerUpdateDto = {
                id: values.id,
                active: false,
                companyName: values.companyName,
                createDate: values.createDate,
                email: values.email,
                employer: { id: values.employer.id },
                firmPhone: values.firmPhone,
                firmWebSite: values.firmWebSite,
                password: values.password,
                repassword: values.repassword
            }
            //console.log(employerUpdateDto);
            employerUpdateService.update(employerUpdateDto);
            
            let employerMainUpdate = {
                id: values.employer.id,
                companyName: values.companyName,
                email: values.email,
                firmPhone: values.firmPhone,
                firmWebSite: values.firmWebSite,
                password: values.password,
                repassword: values.repassword
            }
            employerService.update(employerMainUpdate);
            toast.success(`${values.companyName} başarı ile güncellenmiştir.`)
            window.location.reload();
        }

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
                                    <Button basic color='green' onClick={() => onSubmit(employerUpdate)}>Onayla</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
