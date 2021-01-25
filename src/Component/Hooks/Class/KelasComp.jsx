import { Button } from 'reactstrap'
import React, { Component } from 'react'

class KelasComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jumlah: 0
        }
    }

    tambahProduk = () => {
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.jumlah}</h1>
                <Button onClick={this.tambahProduk}>Klik</Button>
            </div>
        )
    }
}

export default KelasComp