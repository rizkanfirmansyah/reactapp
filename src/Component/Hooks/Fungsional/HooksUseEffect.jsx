import React, { useEffect, useState } from 'react'
import { Container, Table, Button, NavLink, NavItem, Alert } from 'reactstrap';
import axios from 'axios';

function HooksUseEffect() {

    const api = 'http://localhost:3001'

    const [mahasiswa, setMahasiswa] = useState([]);

    useEffect(() => {
        console.log("Memanggil Use Effects");
        axios.get(api + '/mahasiswa').then(res => {
            setMahasiswa(res.data.values)
        })

    }, [])

    return (
        <div>
            <Container>
                <h2>Data Mahasiswa</h2>
                {/* <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/mahasiswa/tambah">
                    <Button color="success">Tambah Data</Button>
                </NavLink> */}
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswa.map(mahasiswa =>
                            <tr key={mahasiswa.id_mahasiswa}>
                                <td>{mahasiswa.nim}</td>
                                <td>{mahasiswa.nama}</td>
                                <td>{mahasiswa.jurusan}</td>
                                <td>
                                    {/* <Link to={
                                        {
                                            pathname: '/mahasiswa/edit',
                                            state: {
                                                id_mahasiswa: mahasiswa.id_mahasiswa,
                                                nim: mahasiswa.nim,
                                                nama: mahasiswa.nama,
                                                jurusan: mahasiswa.jurusan,
                                            }
                                        }
                                    }>
                                        <Button color="warning">Edit</Button>
                                    </Link> */}
                                        &nbsp;
                                        <span></span>
                                    {/* <Button onClick={() => this.deleteMahasiswa(mahasiswa.id_mahasiswa)} color="danger">Hapus</Button> */}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default HooksUseEffect
