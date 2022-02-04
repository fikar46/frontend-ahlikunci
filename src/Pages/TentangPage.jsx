
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import AboutPage from '../component/AboutPage';
import ContactPage from '../component/ContactPage';
const TentangPages = (props) => {

  return (
    <div>
        <HeaderPage/>
        <div className="content-page-after-header">
        <AboutPage/>
        <ContactPage/>
        </div>
    </div>
  );
}

export default TentangPages;