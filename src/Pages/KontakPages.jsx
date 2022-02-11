
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import ContactPage from '../component/ContactPage';
import FooterPage from '../component/Footer';
const KontakPages = (props) => {

  return (
    <div>
        <HeaderPage/>
        <div className="content-page-after-header">
       
        <ContactPage kontak={props.kontak}/>
        <FooterPage kontak={props.kontak}/>
        </div>
    </div>
  );
}

export default KontakPages;