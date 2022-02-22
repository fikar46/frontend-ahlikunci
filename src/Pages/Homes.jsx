
import React, { useEffect, useState } from 'react';
import HeaderPage from '../component/Header';
import CarousellPage from '../component/CarousellPage';
import FiturLayanan from '../component/FiturLayanan';
import AboutPage from '../component/AboutPage';
import PelayananPage from '../component/PelayananPage';
import ServicePage from '../component/ServicePage';
import TestimoniPage from '../component/TestimoniPage';
import ContactPage from '../component/ContactPage';
import FooterPage from '../component/Footer';
import axios from 'axios';
import { koneksi } from '../environtment';
import {Helmet} from "react-helmet";
import EmailSenderComponent from '../component/EmailSender';
const HomesPage = (props) => {
  var kontak = props.kontak;
const handleScroll = () => {
  var mybutton = document.getElementById("myBtn");
    const position = document.documentElement.scrollTop;
    if (position > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
};
  useEffect(()=>{
    getMeta()
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

  },[])
  const topFunction=()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const whatsappFunc=()=>{
    window.open(`https://api.whatsapp.com/send?phone=${kontak.whatsapp}`, '_blank')
  }
  const phoneFunc=()=>{
    window.open(`tel:${kontak.telphone}`, '_blank')
  }
  const [meta,setMeta] = useState({})
  const getMeta=()=>{
    axios.post(`${koneksi}/kunci/getmeta`).then((res)=>{
      setMeta(res.data[0])
    })
  }
  return (
    <div>
        <Helmet>
              <title>{meta.title}</title>
              <meta name="description" content={meta.description} />
              <meta name="robots" content="index, follow" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
              <meta property="type" content="article" />
              <meta property="image" content="https://zkeys.id/logo.png" />
              <meta property="title" content={meta.title} />
              <meta property="description" content={meta.description} />
              <meta property="url" content={window.location.href} />
              <meta property="site_name" content="zkeys.id" />
              <meta name="keywords" content={meta.description} />
              <meta name="googlebot" content="index, follow, follow" />
              <meta name="author" content="zkeys" />
              <meta name="language" content="id" />
              <meta name="geo.country" content="id" />
              <meta httpEquiv="content-language" content="In-Id" />
              <meta name="geo.placename" content="Indonesia" />
              <meta property="og:type" content="article" />
              <meta property="og:image" content='https://zkeys.id/logo.png' />
              <meta property="og:title" content={meta.title} />
              <meta property="og:description" content={meta.description} />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:site_name" content="zkeys.id" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content={`@${kontak.twitter}`} />
              <meta name="twitter:creator" content={`@${kontak.twitter}`} />
              <meta name="twitter:title" content={meta.title} />
              <meta name="twitter:description" content={meta.description}/>
              <meta name="twitter:image" content='https://zkeys.id/logo.png'/>
              <link rel="canonical" href="https://www.zkeys.id/"></link>
        </Helmet>
        <HeaderPage kontak={kontak}/>
        <div className="content-page-after-header">
        <button className="btn btn-back-top" onClick={whatsappFunc} id="myBtn-whatsapp" title="Go to top"><i className='fab fa-whatsapp'></i></button>
        <button className="btn btn-back-top" onClick={phoneFunc} id="myBtn-phone" title="Go to top"><i class='fas fa-phone'></i></button>
        <button className="btn btn-back-top" onClick={topFunction} id="myBtn" title="Go to top"><i class='fas fa-chevron-up'></i></button>
        <CarousellPage kontak={props.kontak}/>
        <FiturLayanan/>
        <AboutPage/>
        <PelayananPage kontak={props.kontak}/>
        <ServicePage kontak={props.kontak}/>
        <TestimoniPage/>
        <ContactPage kontak={props.kontak}/>
        <EmailSenderComponent kontak={props.kontak}/>
        <FooterPage kontak={props.kontak}/>
        </div>
    </div>
  );
}

export default HomesPage;