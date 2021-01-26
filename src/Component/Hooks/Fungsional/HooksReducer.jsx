import React, { useReducer } from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'reactstrap'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'tambah': return state + 1
        case 'kurang': return state - 1
        default:
            return state
    }
}

function HooksReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <Container>
            <br />
            <Row>
                <Col xs='6'>
                    <Card>
                        <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                    </Card>
                </Col>
                <Col xs='6'>
                    <h3>Action Figure Narutohhh</h3>
                    <p>Harga</p>
                    <h4>IDR 350.000</h4>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={() => dispatch('tambah')} color="primary">+</Button></Col>
                        <Col>{count}</Col>
                        <Col><Button onClick={() => dispatch('kurang')}>-</Button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HooksReducer
