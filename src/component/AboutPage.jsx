import React, {  } from 'react';

const AboutPage = (props) => {

  return (
   <div className="container mt-5">
        <div className="text-center mb-5">
            <h1>Ahli kunci mobil Zkeys</h1>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 col-sm-12 col-xs-12 text-center mb-3">
                <div className="u-align-left u-black u-expanded-height u-shape u-shape-1"></div>
                <img src="https://www.ahlikuncipelangi.com/wp-content/uploads/2021/02/4.jpeg" className="image-fluid about-img" alt="zkeys ahli kunci mobil" />
            </div>
            <div className="col-12 col-md-8 col-sm-12 col-xs-12">
               <div className="content-about w-about-text">
               <h2 className="">Sekilas <span className="text-utama">tentang</span> kami</h2>
                <p className="">Zkeys melayani service kunci mobil yang mengalami kerusakan akibat patah, hilang / lost key, tidak terdeteksi sistem kunci keyless, dan juga pembuatan kunci baru. Melayani semua merk dan type mobil. Silahkan konsultasikan masalah kunci mobil Anda kepada kami. Dengan senang hati kami akan membantu menemukan solusi kunci mobil Anda.
                    <br/> <br/>
                    Kami menjangkau seluruh Wilayah Jabodetabek kususnya Tangerang, Tangerang Selatan, Banten, DKI Jakarta, Bekasi, Depok, Cinere, Bogor dan Sekitarnya.
                    <br/> <br/>
                    Melayani semua merk dan jenis mobil seperti Mitsubishi, Toyota, Mercedes Benz, BMW, Peugeot, Daihatsu, Honda, Suzuki, Chevrolet, Kia, Hyundai, Audi, dll.</p>
               </div>
            </div>
        </div>
   </div>
  );
}

export default AboutPage;