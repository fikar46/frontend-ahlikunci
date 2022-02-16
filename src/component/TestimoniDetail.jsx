import React ,{useState, useEffect} from 'react';
import {
  useParams
} from "react-router-dom";
import axios from 'axios';
// import {Helmet} from "react-helmet";
import { Markup } from "interweave";
import { koneksi } from '../environtment';
import {Helmet} from "react-helmet";

const queryString = require('query-string');
function TestimoniPageDetail(props){
  let { id,judul } = useParams();
  const [blogPage,setBlogPage] = useState({})
  var user = JSON.parse(localStorage.getItem("data"))
  useEffect(()=>{
    getBlogById()
  },[])
  const getBlogById=()=>{
    axios.post(`${koneksi}/kunci/gettestimonibyid`,{
      id,unique:id
    }).then(res=>{
      setBlogPage(res.data[0])
    })
  }
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
const mapVideo=()=>{
if(blogPage.youtube != null){
  const parsed = queryString.parse(blogPage.youtube);
  var videoId =parsed[Object.keys(parsed)[0]];
  return<iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
}
}
    return(
       <div className="container mt-5">
        <Helmet>
              <title>{blogPage.judul}</title>
              <meta name="description" content={blogPage.caption} />
              <meta name="robots" content="index, follow" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
              <meta property="type" content="article" />
              <meta property="image" content={`https://storage.siapptn.com/image/blog/${blogPage.thumbnail}`} />
              <meta property="title" content={blogPage.judul} />
              <meta property="description" content={blogPage.caption} />
              <meta property="url" content={window.location.href} />
              <meta property="site_name" content="zkeys.id" />
              <meta name="keywords" content={blogPage.caption} />
              <meta name="googlebot" content="index, follow, follow" />
              <meta name="author" content="zkeys" />
              <meta name="language" content="id" />
              <meta name="geo.country" content="id" />
              <meta httpEquiv="content-language" content="In-Id" />
              <meta name="geo.placename" content="Indonesia" />
              <meta property="og:type" content="article" />
              <meta property="og:image" content={`https://storage.siapptn.com/image/blog/${blogPage.thumbnail}`} />
              <meta property="og:title" content={blogPage.judul} />
              <meta property="og:description" content={blogPage.caption} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:site_name" content="zkeys.id" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content={`@${props.kontak.twitter}`} />
              <meta name="twitter:creator" content={`@${props.kontak.twitter}`} />
              <meta name="twitter:title" content={blogPage.judul} />
              <meta name="twitter:description" content={blogPage.caption}/>
              <meta name="twitter:image" content={`https://storage.siapptn.com/image/blog/${blogPage.thumbnail}`}/>
              <link rel="amphtml" href={window.location.href} />
        </Helmet>
        <div className="row g-5">
        <div className="col-12 col-md-8">
          <div className="blog-post">
            <h2 className="blog-post-title">{blogPage.judul}</h2>
            <p className="blog-post-meta">{monthNames[new Date(blogPage.date_create).getMonth()]} {new Date(blogPage.date_create).getDate()} ,{new Date(blogPage.date_create).getFullYear()} <a href="#">Admin</a></p>
            <div className="text-center">
            <img src={`https://storage.siapptn.com/image/blog/${blogPage.thumbnail}`} alt={`Gambar ${blogPage.judul}`} style={{height:"auto",width:"80%"}}/>
            </div>
            <hr/>
            <p className="caption-w">{blogPage.caption}</p>
            <hr />
           
            <Markup content={blogPage.konten} tagName="span"/>
           {mapVideo()}
          </div>
          
        </div>
        <div className="col-md-4 ">
          <div className="position-sticky" style={{top: '6rem'}}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">Tentang Zkeys</h4>
              <p className="mb-0">Kami melayani service kunci mobil yang mengalami kerusakan akibat patah, hilang / lost key, tidak terdeteksi sistem kunci keyless, pembuatan kunci baru. Melayani semua merk dan type mobil. <br/><br/>
                Silahkan konsultasikan masalah kunci mobil Anda kepada kami. Dengan senang hati kami akan membantu menemukan solusi kunci mobil Anda.<br/><br/>
                Kami menjangkau seluruh Wilayah Tangerang, Tangerang Selatan, Banten, DKI Jakarta, Bekasi, Depok, Cinere, Bogor dan Sekitarnya.<br/><br/>
                Melayani semua merk dan jenis mobil seperti Mitsubishi, Toyota, Mercedes Benz, BMW, Peugeot, Daihatsu, Honda, Suzuki, Chevrolet, Kia, Hyundai, Audi, dll..</p>
            </div>
        
        
          </div>
        </div>
      </div>
    
       </div>
    )
  
}
export default TestimoniPageDetail;