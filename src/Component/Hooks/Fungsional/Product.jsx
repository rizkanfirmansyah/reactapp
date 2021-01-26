import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import RowProduct from './RowProduct'

function Product() {
    return (
        <div>
            <Container>
                <hr />
                <h2>Produk</h2>
                <Row>
                    <RowProduct />
                    <RowProduct />
                    <RowProduct />
                </Row>
            </Container>
        </div>
    )
}

export default Product
