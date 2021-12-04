import React, { useEffect, useState } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';
import EmployerService from '../../services/employerService';

export default function EmployerList() {
    
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        //component yüklendiğinde yapılmasını istediğin şeyi buraya yazıyorsun bu demek oluyorki sayfa yüklendiğinde aslında bu metod çalışacak.
        let employerService = new EmployerService();
        employerService.getAll().then(result => setEmployers(result.data.data))
        //burada result.data
        //         "success": true,
        //   "message": "Ürünler Listelendi.",
        //   "data": [
        //hepsini birden döndürür biz buradan sadece datayı alacağımız için data.data şeklinde yazdık unutma!
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Firma ismi</Table.HeaderCell>
                        <Table.HeaderCell>Firma Email</Table.HeaderCell>
                        <Table.HeaderCell>Firma Telefon</Table.HeaderCell>
                        <Table.HeaderCell>Firma Web Site</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        employers.map((employer) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={employer.id} >
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.firmPhone}</Table.Cell>
                                <Table.Cell>{employer.firmWebSite}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
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
