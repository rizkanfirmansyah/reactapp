import React from "react"
import Produk from "../Class/Produk";
import Blog from "./Blog"

const Home = () => {
    return <div>
        {
            <div>
                <Produk stock="10" nama="Macbook Pro 2020" harga="22000000" />
                <Produk stock="20" nama="Macbook Pro 2019" harga="19000000" />
                <Produk stock="6" nama="Macbook Pro 2018 Touchbar" harga="39000000" />
                <Produk stock="30" nama="Macbook Air M1" harga="21000000" />
                <Produk stock="7" nama="Macbook Pro 2015" harga="15000000" />
            </div>
        }
    </div>


    /* <Blog 
    tanggal="20 January 2021"
    judul="Teknologi Digital"
    summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eum inventore beatae reprehenderit, similique perferendis porro dolores laudantium voluptas facere."
    />
    <Blog 
    tanggal="21 January 2021"
    judul="Teknologi IoT"
    summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eum inventore beatae reprehenderit, similique perferendis porro dolores laudantium voluptas facere."
    />
    <Blog 
    tanggal="22 January 2021"
    judul="Teknologi React dan Patern UX/UI"
    summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eum inventore beatae reprehenderit, similique perferendis porro dolores laudantium voluptas facere."
    /> */
}




export default Home; 