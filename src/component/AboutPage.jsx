import React, {  } from 'react';

const AboutPage = (props) => {

  return (
   <div className="container mt-5">
        <div className="text-center mb-5">
            <h1>Ahli service kunci dan duplikat kunci mobil Immobilizer {props.kota != undefined? props.kota:"Zkeys.id"}</h1>
        </div>
        <div className="row">
            <div className="col-12 col-md-4 col-sm-12 col-xs-12 text-center mb-3">
                <div className="u-align-left u-black u-expanded-height u-shape u-shape-1"></div>
                <img src="./asset/about.webp" className="image-fluid about-img" alt="zkeys ahli kunci mobil" />
            </div>
            <div className="col-12 col-md-8 col-sm-12 col-xs-12">
               <div className="content-about w-about-text">
               <h2 className="">Ahli service kunci dan duplikat kunci mobil Immobilizer<span className="text-utama"> {props.kota != undefined? props.kota:"terdekat"}</span></h2>
                <p className="">Kami ahli service kunci mobil immobilizer terdekat, terima duplikat kunci mobil immobilizer, kunci hilang, kunci patah, buka pintu mobil kunci tertinggal didalam mobil, duplikat dan buka kunci motor dan buka brankas. melayani jabodetabek sekitarnya
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