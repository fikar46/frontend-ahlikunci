import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { koneksi } from '../environtment';

const TestimoniPage = (props) => {
    const [testi,setTesti] = useState([]);
    useEffect(()=>{
        getAllTesti()
    },[])
    const getAllTesti=()=>{
        axios.post(`${koneksi}/kunci/getalltestimoni`,{
            page:0,unique:0
        }).then((res)=>{
            var data = res.data.result.filter((item)=> {
                return item.status_blog != "reject"
            })
            setTesti(data)
        })
    }
    const mapTesti=()=>{
       
        var data = testi.slice(0,3).map((item)=>{
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
  <div className="bg-layanan">
       <div className="container mt-5 p-3">
            <h2 className="text-center text-white py-5">Testimoni pelanggan kami</h2>
            <div className="row">
                {mapTesti()}
            </div>
            <div className="text-center text-white mb-4">
               <a href="/all-testimoni"><button className="btn btn-utama btn-lg"> Lihat testimoni lainnya</button></a>
            </div>
        </div>
  </div>
  );
}

export default TestimoniPage;