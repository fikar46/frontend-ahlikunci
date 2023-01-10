
import React, { useState, useEffect } from 'react';
import HeaderPage from '../component/Header';
import axios from 'axios';
import { koneksi } from '../environtment';
import MapPaginationComponent from '../admin/helper/paginationComponent';
import FooterPage from '../component/Footer';
import {Helmet} from "react-helmet";
const AllTestimoniPages = (props) => {
    const [testi,setTesti] = useState([]);
    const [page, setPage ] =useState(0)
    const [pagination, setPagination ] =useState(0)
    useEffect(()=>{
        getAllTesti()
    },[])
    const getAllTesti=()=>{
        axios.post(`${koneksi}/kunci/getalltestimoni`,{
            page:page*10,unique:page*10
        }).then((res)=>{
            var data = res.data.result.filter((item)=> {
                return item.status_blog != "reject"
            })
            setTesti(data)
            setPagination(res.data.pagination)
        })
    }
    const mapTesti=()=>{
       
        var data = testi.map((item)=>{
            return(
                <div className="col-12 col-md-4 mb-4">
                    <div className="card p-3">
                        <div className="image-card-testimoni">
                            <img src={`https://storage.siapptn.com/image/blog/${item.thumbnail}`} className="card-img-top img-card-size" alt={item.judul}></img>
                        </div>
                        <h4>{item.judul}</h4>
                        <p className="caption-text">{item.caption}</p>
                        <a href={`/testimoni/${item.id}`} className='btn btn-success'>Lihat Testimoni</a>
                    </div>
                </div>
            )
        })
        return data
    }
  return (
    <div>
        <HeaderPage kontak={props.kontak}/>
        <Helmet>
              <title>Testimoni Pelanggan</title>
              <meta name="description" content={'Testimoni dari beberapa pelanggan kami yang telah menggunakan jasa perbaikan kunci ditempat kami, kami juga bisa datang langsung kelokasi pelanggan kami'} />
              <meta name="robots" content="index, follow" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
              <meta property="type" content="article" />
              <meta property="image" content={`https://zkeys.id/logo.png`} />
              <meta property="title" content={'Testimoni Pelanggan'} />
              <meta property="description" content={'Testimoni dari beberapa pelanggan kami yang telah menggunakan jasa perbaikan kunci ditempat kami, kami juga bisa datang langsung kelokasi pelanggan kami'} />
              <meta property="url" content={window.location.href} />
              <meta property="site_name" content="zkeys.id" />
              <meta name="keywords" content={'Testimoni dari beberapa pelanggan kami yang telah menggunakan jasa perbaikan kunci ditempat kami, kami juga bisa datang langsung kelokasi pelanggan kami'} />
              <meta name="googlebot" content="index, follow, follow" />
              <meta name="author" content="zkeys" />
              <meta name="language" content="id" />
              <meta name="geo.country" content="id" />
              <meta httpEquiv="content-language" content="In-Id" />
              <meta name="geo.placename" content="Indonesia" />
              <meta property="og:type" content="article" />
              <meta property="og:image" content={`https://zkeys.id/logo.png`} />
              <meta property="og:title" content={'Testimoni Pelanggan'} />
              <meta property="og:description" content={'Testimoni dari beberapa pelanggan kami yang telah menggunakan jasa perbaikan kunci ditempat kami, kami juga bisa datang langsung kelokasi pelanggan kami'} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:site_name" content="zkeys.id" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content={`@${props.kontak.twitter}`} />
              <meta name="twitter:creator" content={`@${props.kontak.twitter}`} />
              <meta name="twitter:title" content={'Testimoni Pelanggan'} />
              <meta name="twitter:description" content={'Testimoni dari beberapa pelanggan kami yang telah menggunakan jasa perbaikan kunci ditempat kami, kami juga bisa datang langsung kelokasi pelanggan kami'}/>
              <meta name="twitter:image" content={`https://zkeys.id/logo.png`}/>
        </Helmet>
        <div className="content-page-after-header">
            <div className="container mt-5">
                <h1 className="mt-3 text-center">Semua testimoni ahli kunci mobil Zkeys.id</h1>
                <p className="mb-5 text-center">Berikut dibawah ini merupakan testimoni dari pelanggan - pelanggan kami</p>
                <div className="row">
                    {mapTesti()}
                </div>
                {MapPaginationComponent(pagination,page,setPage,getAllTesti)}
            </div>
            <FooterPage kontak={props.kontak}/>
        </div>
    </div>
  );
}

export default AllTestimoniPages;