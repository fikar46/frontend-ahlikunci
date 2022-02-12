
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import FiturLayanan from '../component/FiturLayanan';
import PelayananPage from '../component/PelayananPage';
import ServicePage from '../component/ServicePage';
import ContactPage from '../component/ContactPage';
import FooterPage from '../component/Footer';
const LayananPages = (props) => {

  return (
    <div>
        <HeaderPage kontak={props.kontak}/>
        <div className="content-page-after-header">
        <div className="mb-3"></div>
        <FiturLayanan/>
        <PelayananPage/>
        <ServicePage/>
        <ContactPage kontak={props.kontak}/>
        <FooterPage kontak={props.kontak}/>
        </div>
    </div>
  );
}

export default LayananPages;