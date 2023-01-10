
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import AboutPage from '../component/AboutPage';
import ContactPage from '../component/ContactPage';
import FooterPage from '../component/Footer';
import { Helmet } from 'react-helmet';
const TentangPages = (props) => {

  return (
    <div>
       <Helmet>
              <meta name="robots" content="index, follow" />
              <meta name="googlebot" content="index, follow, follow" />
              <link rel="canonical" href="https://zkeys.id/tentang-kami"></link>
        </Helmet>
        <HeaderPage kontak={props.kontak}/>
        <div className="content-page-after-header">
        <AboutPage />
        <ContactPage kontak={props.kontak}/>
        <FooterPage kontak={props.kontak}/>
        </div>
    </div>
  );
}

export default TentangPages;