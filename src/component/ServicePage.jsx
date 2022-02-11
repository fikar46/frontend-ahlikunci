import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { koneksi } from '../environtment';
const ServicePage = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [layanan,setLayanan] = useState([])
  useEffect(()=>{
    getLayanan()
  },[])
  const getLayanan=()=>{
    axios.post(`${koneksi}/kunci/getlayananlandingpage`).then((res)=>{
      setLayanan(res.data)
    }).catch((err)=>{

    })
  }
  const mapData=()=>{
    var data = layanan.map((item)=>{
      return(
        <div>
        <a href="#" className="text-dark "  style={{textDecoration:'none'}}>
          <div className="card p-3">
                        <div className="image-card-service">
                            <img src={`https://storage.siapptn.com/image/blog/${item.foto}`} className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <p>{item.nama}</p>  
            </div>
        </a>
        </div>
      )
    })
    return data
  }
  return (
       <div className="container my-5 p-3">
            <h1 className="text-center py-5">Berikut beberapa layanan yang sudah kami tangani</h1>
            <Slider {...settings}>
          
            {mapData()}
          
        
        </Slider>
        </div>

  );
}

export default ServicePage;
