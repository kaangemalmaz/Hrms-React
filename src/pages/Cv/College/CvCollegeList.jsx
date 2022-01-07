import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';
import CvCollegeService from '../../../services/cvcollegeService';

export default function CvCollegeList() {

    const [cvColleges, setCvColleges] = useState([]);
    let cvCollegeService = new CvCollegeService();

    useEffect(() => {
        cvCollegeService.getAll().then(result => setCvColleges(result.data.data))
    },[])

    const onSubmit = (values) => {
        cvCollegeService.delete(values.id);
        window.location.reload();
        toast.success(`${values.collegeName} başarı ile silinmiştir.`)
    }

    return (
        <div>
            <Button basic color='yellow'><Link to={"/cvCollege/add/"}>Okul ekleyiniz.</Link></Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Okul İsmi</Table.HeaderCell>
                        <Table.HeaderCell>İşlemler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        cvColleges.map((cvCollege) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={cvCollege.id} >
                                <Table.Cell>{cvCollege.collegeName}</Table.Cell>
                                <Table.Cell>
                                    <Button basic color='yellow'><Link to={"/cvCollege/update/" + cvCollege.id}>Güncelle</Link></Button>
                                    <Button basic color='red' onClick={() => onSubmit(cvCollege)}>Sil</Button>
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
