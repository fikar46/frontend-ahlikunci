
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import ContactPage from '../component/ContactPage';
const KontakPages = (props) => {

  return (
    <div>
        <HeaderPage/>
        <div className="content-page-after-header">
       
        <ContactPage/>
        </div>
    </div>
  );
}

export default KontakPages;