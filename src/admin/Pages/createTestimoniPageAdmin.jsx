import React, {  } from 'react';
import HeaderPageAdmin from '../component/navbar';
import CreateTestimoniAdmin from '../component/testimoni/createTestimoni';

const CreateTestimoniPagesAdmin = (props) => {

  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
        <CreateTestimoniAdmin/>
        </div>
        
   </div>
  );
}

export default CreateTestimoniPagesAdmin;