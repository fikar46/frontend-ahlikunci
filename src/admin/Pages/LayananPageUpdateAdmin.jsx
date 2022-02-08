import React, {  } from 'react';
import HeaderPageAdmin from '../component/navbar';
import LayananUpdateComponentAdmin from '../component/layanan/layananUpdate';

const LayananUpdatePageAdmin = (props) => {

  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
            <LayananUpdateComponentAdmin/>
        </div>
        
   </div>
  );
}

export default LayananUpdatePageAdmin;