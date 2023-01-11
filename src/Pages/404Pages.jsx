
import React, {  } from 'react';
import { Helmet } from 'react-helmet';
import HeaderPage from '../component/Header';

const NotFoundPages = (props) => {

  return (
    <div>
       <Helmet>
              <link rel="canonical" href="https://zkeys.id"></link>
        </Helmet>
        <HeaderPage kontak={props.kontak}/>
        <div className="content-page-after-header">
            <div className="container">
                <div className="text-center mt-9">
                    <h1 className="notfoundtext">404 NOT FOUND</h1>
                    <h2>Page yang anda cari tidak ada.</h2>
                    <a href="/" className="btn btn-success mt-3">Kembali ke beranda</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default NotFoundPages;