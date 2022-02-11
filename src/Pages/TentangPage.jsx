
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import AboutPage from '../component/AboutPage';
import ContactPage from '../component/ContactPage';
import FooterPage from '../component/Footer';
const TentangPages = (props) => {

  return (
    <div>
        <HeaderPage/>
        <div className="content-page-after-header">
        <AboutPage />
        <ContactPage kontak={props.kontak}/>
        <FooterPage kontak={props.kontak}/>
        </div>
    </div>
  );
}

export default TentangPages;