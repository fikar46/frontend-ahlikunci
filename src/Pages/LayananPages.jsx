
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import FiturLayanan from '../component/FiturLayanan';
import PelayananPage from '../component/PelayananPage';
import ServicePage from '../component/ServicePage';
import ContactPage from '../component/ContactPage';
import FooterPage from '../component/Footer';
import { Helmet } from 'react-helmet';
const LayananPages = (props) => {

  return (
    <div>
        <Helmet>
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow, follow" />
              <link rel="canonical" href="https://zkeys.id/layanan"></link>
        </Helmet>
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