import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Icon, Menu, Table } from 'semantic-ui-react';
import CityService from '../../services/cityService';

export default function CityList() {

    const [cities, setCities] = useState([]);
    let cityService = new CityService();
    useEffect(() => {
        //component yüklendiğinde yapılmasını istediğin şeyi buraya yazıyorsun bu demek oluyorki sayfa yüklendiğinde aslında bu metod çalışacak.

        cityService.getAll().then(result => setCities(result.data.data))
        //burada result.data
        //         "success": true,
        //   "message": "Ürünler Listelendi.",
        //   "data": [
        //hepsini birden döndürür biz buradan sadece datayı alacağımız için data.data şeklinde yazdık unutma!
    })

    const onSubmit = (values) => {
        cityService.delete(values.id);
        toast.success(`${values.name} başarı ile silinmiştir.`)
    }

    return (
        <div>
            <Button basic color='yellow'><Link to={"/cities/add/"}>Şehir ekleyiniz.</Link></Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>İşlemler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* js kodu yazmak için {} parantezlerini kullanıyoruz */}
                    {
                        cities.map((city) => (
                            //burada react tablonun her kolonu için id istemektedir. o yüzden burada key olarak verilir.
                            <Table.Row key={city.id} >
                                <Table.Cell>{city.name}</Table.Cell>
                                <Table.Cell>
                                    <Button basic color='yellow'><Link to={"/cities/update/" + city.id}>Güncelle</Link></Button>
                                    <Button basic color='red' onClick={() => onSubmit(city)}>Sil</Button>
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
