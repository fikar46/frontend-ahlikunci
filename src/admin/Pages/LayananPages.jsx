import React, {  } from 'react';
import HeaderPageAdmin from '../component/navbar';
import LayananListComponentAdmin from '../component/layanan/layananList';

const LayananPageAdmin = (props) => {

  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
            <LayananListComponentAdmin/>
        </div>
        
   </div>
  );
}

export default LayananPageAdmin;