
import React, {  } from 'react';
import HeaderPage from '../component/Header';
import TestimoniPageDetail from '../component/TestimoniDetail';
import FooterPage from '../component/Footer';

const TestimoniPages = (props) => {

  return (
    <div>
       
        <HeaderPage kontak={props.kontak}/>
        <div className="content-page-after-header">
             <TestimoniPageDetail kontak={props.kontak}/>
             <FooterPage kontak={props.kontak}/>
        </div>
    </div>
  );
}

export default TestimoniPages;