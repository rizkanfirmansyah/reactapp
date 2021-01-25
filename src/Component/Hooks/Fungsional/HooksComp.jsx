import React, { useState } from 'react'
import TampilComp from '../../Fungsional/TampilComp';

const HooksComp = () => {
    const [jumlah, tambahJumlah] = useState(0)

    // Login
    const [dataLogin, setDataLogin] = useState({ username: 'rizkan', token: '123abcd', isLogin: true })

    // Cek Kondisi

    let tampil;

    if (dataLogin.isLogin) {
        tampil = <TampilComp
            username={dataLogin.username}
            fungsi={tambahJumlah.bind(this)}
            jumlah={jumlah} />
    } else {
        tampil = <TampilComp username="Maaf anda belum login" disabled={true} />
    }
    return (
        <div>
            {tampil}
        </div >
    )
}

export default HooksComp
