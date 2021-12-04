import React, { useEffect, useState } from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';
import CandidateService from '../../services/candidateService';


export default function CandidateList(){
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        //component yüklendiğinde yapılmasını istediğin şeyi buraya yazıyorsun bu demek oluyorki sayfa yüklendiğinde aslında bu metod çalışacak.
        let candidatesService = new CandidateService();
        candidatesService.getAll().then(result => setCandidates(result.data.data))
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
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>Tc Kimlik No</Table.HeaderCell>
                        <Table.HeaderCell>Birthday</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        candidates.map((candidate) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={candidate.id} >
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell>{candidate.name}</Table.Cell>
                                <Table.Cell>{candidate.surname}</Table.Cell>
                                <Table.Cell>{candidate.identityNo}</Table.Cell>
                                <Table.Cell>{candidate.birthDay}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
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