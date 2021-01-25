import React from 'react';
import "./CSS/Blog.css";

const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://placeimg.com/640/480/tech" alt=""/>
        <p>{props.tanggal}</p>
        <h3><b>{props.judul}</b></h3>
        <p>{props.summary}</p>
    </div>
}



export default Blog;