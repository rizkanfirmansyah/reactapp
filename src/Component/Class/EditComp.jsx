import React, { Component } from 'react'
import axios from "axios";
import { Container, Col, Row, Form, Alert, Label, Input, Button, FormGroup } from "reactstrap";
import { Link } from 'react-router-dom'
import qs from 'querystring';

const api = 'http://localhost:3001'

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_mahasiswa: this.props.location.state.id_mahasiswa,
            nim: this.props.location.state.nim,
            nama: this.props.location.state.nama,
            jurusan: this.props.location.state.jurusan,
            response: '',
            display: 'none',

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahMahasiswa = (id_mahasiswa) => {
        const data = qs.stringify({
            id_mahasiswa: id_mahasiswa,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan,
        });
        axios.put(api + '/update', data)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block',
                    })
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block',
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <Container>
                    <h4>Form Edit Data</h4>
                    <Alert color="success" style={{ display: this.state.display }}>
                        {this.state.response}
                    </Alert>
                    <Form className="form">
                        <Col>
                            <Label>NIM</Label>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} placeholder="Masukkan Nim"></Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Nama</Label>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama"></Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Jurusan</Label>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Input type="text" name="jurusan" value={this.state.jurusan} onChange={this.handleChange} placeholder="Masukkan Jurusan"></Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col>
                                        <Button type="button" onClick={() => this.ubahMahasiswa(this.state.id_mahasiswa)}>Simpan</Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default EditComp