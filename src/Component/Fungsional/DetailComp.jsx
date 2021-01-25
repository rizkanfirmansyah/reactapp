import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

function DetailComp(props) {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">{props.location.state.judul}</h1>
                <p className="lead"><small>{props.location.state.tanggal}</small>.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default DetailComp
