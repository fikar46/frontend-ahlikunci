import React, {  } from 'react';
import HeaderPageAdmin from '../component/navbar';
import DashboardPageAdmin from '../component/dashboard';

const HomePageAdmin = (props) => {

  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
        <DashboardPageAdmin/>
        </div>
        
   </div>
  );
}

export default HomePageAdmin;