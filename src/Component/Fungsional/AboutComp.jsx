import React, { useContext } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { CartContext } from '../../CartContext';
import CardComp from './CardComp';

function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">About Us</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>

            <Container>
                <Row>
                    <Col>
                        <CardComp id="1" judul="Teknologi React" tanggal="25/06/2021"></CardComp>
                    </Col>
                    <Col>
                        <CardComp id="2" judul="API with React" tanggal="25/06/2021"></CardComp>
                    </Col>
                    <Col>
                        <CardComp id="3" judul="Implementasi React" tanggal="25/06/2021"></CardComp>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AboutComp
