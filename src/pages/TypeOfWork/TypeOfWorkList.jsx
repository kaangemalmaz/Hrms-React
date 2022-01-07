import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Table } from 'semantic-ui-react';
import TypeOfWorkService from '../../services/typeOfWorkService';

export default function TypeOfWorkList() {

    const [typeofworks, setTypeOfWorks] = useState([]);

    let typeofworkService = new TypeOfWorkService();
    useEffect(() => {
        typeofworkService.getAll().then(result => setTypeOfWorks(result.data.data))
    }, [])

    const onSubmit = (values) => {
        typeofworkService.delete(values.id);
        window.location.reload();
        toast.success(`${values.workType} başarı ile silinmiştir.`)
    }

    return (
        <div>
            <Button basic color='yellow'><Link to={"/typeofwork/add/"}>İş yöntemi ekleyiniz.</Link></Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        typeofworks.map((typeofwork) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={typeofwork.id} >

                                <Table.Cell>{typeofwork.workType}</Table.Cell>
                                <Table.Cell>
                                    <Button basic color='yellow'><Link to={"/typeofwork/update/" + typeofwork.id}>Güncelle</Link></Button>
                                    <Button basic color='red' onClick={() => onSubmit(typeofwork)}>Sil</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
