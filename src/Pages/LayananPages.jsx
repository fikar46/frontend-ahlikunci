
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import FiturLayanan from '../component/FiturLayanan';
import PelayananPage from '../component/PelayananPage';
import ServicePage from '../component/ServicePage';
import ContactPage from '../component/ContactPage';
const LayananPages = (props) => {

  return (
    <div>
        <HeaderPage/>
        <div className="content-page-after-header">
        <div className="mb-3"></div>
        <FiturLayanan/>
        <PelayananPage/>
        <ServicePage/>
        <ContactPage/>
        </div>
    </div>
  );
}

export default LayananPages;