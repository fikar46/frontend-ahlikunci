import React, {  } from 'react';
import HeaderPageAdmin from '../component/navbar';
import LayananCreateComponentAdmin from '../component/layanan/layananCreate';

const LayananCreatePageAdmin = (props) => {

  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
            <LayananCreateComponentAdmin/>
        </div>
        
   </div>
  );
}

export default LayananCreatePageAdmin;