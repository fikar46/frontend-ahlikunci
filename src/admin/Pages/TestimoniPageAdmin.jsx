import React, {  } from 'react';
import HeaderPageAdmin from '../component/navbar';
import TesimoniListPageAdmin from '../component/testimoniList';

const TesimoniPageAdmin = (props) => {

  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
        <TesimoniListPageAdmin/>
        </div>
        
   </div>
  );
}

export default TesimoniPageAdmin;