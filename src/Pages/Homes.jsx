
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
  return (
    <div>
       
        <HeaderPage/>
        <div className="content-page-after-header">
        <button className="btn btn-back-top" onClick={whatsappFunc} id="myBtn-whatsapp" title="Go to top"><i className='fab fa-whatsapp'></i></button>
        <button className="btn btn-back-top" onClick={phoneFunc} id="myBtn-phone" title="Go to top"><i class='fas fa-phone-alt'></i></button>
        <button className="btn btn-back-top" onClick={topFunction} id="myBtn" title="Go to top"><i class='fas fa-chevron-up'></i></button>
        <CarousellPage/>
        <FiturLayanan/>
        <AboutPage/>
        <PelayananPage/>
        <ServicePage/>
        <TestimoniPage/>
        <ContactPage kontak={props.kontak}/>
        <FooterPage kontak={props.kontak}/>
        </div>
    </div>
  );
}

export default HomesPage;