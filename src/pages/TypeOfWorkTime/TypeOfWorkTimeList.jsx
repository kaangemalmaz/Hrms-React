import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Table } from 'semantic-ui-react';
import TypeOfWorkTimeService from '../../services/typeOfWorkTimeService';

export default function TypeOfWorkTimeList() {

    const [typeofworktimes, setTypeOfWorksTimes] = useState([]);

    let typeofworktimeService = new TypeOfWorkTimeService();
    useEffect(() => {
        typeofworktimeService.getAll().then(result => setTypeOfWorksTimes(result.data.data))
    }, [])

    const onSubmit = (values) => {
        typeofworktimeService.delete(values.id);
        window.location.reload();
        toast.success(`${values.workTimeType} başarı ile silinmiştir.`)
    }

    return (
        <div>
            <Button basic color='yellow'><Link to={"/typeofworktime/add/"}>Çalışma yöntemi ekleyiniz.</Link></Button>
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
                        typeofworktimes.map((typeofworktime) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={typeofworktime.id} >

                                <Table.Cell>{typeofworktime.workTimeType}</Table.Cell>
                                <Table.Cell>
                                    <Button basic color='yellow'><Link to={"/typeofworktime/update/" + typeofworktime.id}>Güncelle</Link></Button>
                                    <Button basic color='red' onClick={() => onSubmit(typeofworktime)}>Sil</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
