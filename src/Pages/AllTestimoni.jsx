
import React, { useState, useEffect } from 'react';
import HeaderPage from '../component/Header';
import axios from 'axios';
import { koneksi } from '../environtment';
import MapPaginationComponent from '../admin/helper/paginationComponent';
import FooterPage from '../component/Footer';
const AllTestimoniPages = (props) => {
    const [testi,setTesti] = useState([]);
    const [page, setPage ] =useState(0)
    const [pagination, setPagination ] =useState(0)
    useEffect(()=>{
        getAllTesti()
    },[])
    const getAllTesti=()=>{
        axios.post(`${koneksi}/kunci/getalltestimoni`,{
            page:page*10
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
                            <img src={`https://storage.siapptn.com/image/blog/${item.thumbnail}`} className="card-img-top img-card-size" alt=""></img>
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
        <HeaderPage/>
        <div className="content-page-after-header">
            <div className="container mt-5">
                <h1 className="mt-3 text-center">Semua testimoni</h1>
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