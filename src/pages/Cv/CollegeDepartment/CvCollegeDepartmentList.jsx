import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';
import CvCollegeDepartmentService from '../../../services/cvCollegeDepartmentService';

export default function CvCollegeDepartmentList() {

    const [cvCollegeDepartments, setCvCollegeDepartments] = useState([]);
    let cvCollegeDepartmentService = new CvCollegeDepartmentService();

    useEffect(() => {
        cvCollegeDepartmentService.getAll().then(result => setCvCollegeDepartments(result.data.data))
    },[])

    const onSubmit = (values) => {
        cvCollegeDepartmentService.delete(values.id);
        toast.success(`${values.collegeDepartmentName} başarı ile silinmiştir.`)
    }

    return (
        <div>
            <Button basic color='yellow'><Link to={"/cvCollegeDepartment/add/"}>Departman ekleyiniz.</Link></Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Departman İsmi</Table.HeaderCell>
                        <Table.HeaderCell>İşlemler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        cvCollegeDepartments.map((cvCollegeDepartment) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={cvCollegeDepartment.id} >
                                <Table.Cell>{cvCollegeDepartment.collegeDepartmentName}</Table.Cell>
                                <Table.Cell>
                                    <Button basic color='yellow'><Link to={"/cvCollegeDepartment/update/" + cvCollegeDepartment.id}>Güncelle</Link></Button>
                                    <Button basic color='red' onClick={() => onSubmit(cvCollegeDepartment)}>Sil</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>


                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>

            </Table>
        </div>
    )
}
