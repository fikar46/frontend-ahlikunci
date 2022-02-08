import React, {  } from 'react';
import HeaderPageAdmin from '../component/navbar';
import UpdateTestimoniAdmin from '../component/testimoni/UpdateTestimoni';

const UpdateTestimoniPagesAdmin = (props) => {

  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
        <UpdateTestimoniAdmin/>
        </div>
        
   </div>
  );
}

export default UpdateTestimoniPagesAdmin;