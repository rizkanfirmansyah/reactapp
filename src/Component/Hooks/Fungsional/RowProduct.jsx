import React, { useContext } from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Button, CardText } from 'reactstrap'
import { CartContext } from '../../../CartContext'

function RowProduct() {

    const { value, setValue } = useContext(CartContext)
    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Lenovo Yoga S7</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">IDR 12.000.00</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambah Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default RowProduct
