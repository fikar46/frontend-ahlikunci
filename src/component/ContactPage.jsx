import React, {  } from 'react';

const ContactPage = (props) => {
    const kontak = props.kontak;
  return (
    <div className="bg-contact">
    <div className="container py-5">
        <div className="row">
            <div className="col-12 col-md-4 col-sm-12 col-xs-12 text-center mb-3">
                <div className="u-align-left u-black u-expanded-height u-shape u-shape-1"></div>
                <div className="bg-image-contact">
                    <img src="./asset/logo-black.jpeg" className="image-fluid contact-img" alt="logo" />
                </div>
            </div>
            <div className="col-12 col-md-8 col-sm-12 col-xs-12">
                <div className="content-about w-about-text">
                    <h1 className="text-utama">Kontak Kami</h1>
                    <p className="text-dark">Segera hubungi kami untuk informasi selengkapnya mengenai jasa ahli kunci mobil, anda bisa datang ke workshop kami atau kami langsung meluncur ke lokasi anda!</p>
                    <a href={`https://api.whatsapp.com/send?phone=${kontak.whatsapp}`}><button className="btn btn-whatsapp mb-3"><i className='fab fa-whatsapp'></i> Klik disini untuk Whatsapp kami</button></a><br/>
                    <a href={`tel:${kontak.telphone}`}><button className="btn btn-telfon"><i className='fas fa-phone'></i> {kontak.telphone}</button></a>
                    <div className="mt-3">
                    <hr/>
                        <h3>Lokasi workshop</h3>
                        <p>{kontak.address}</p>
                        <hr/>
                        <p><span className="font-weight-bold">Jam Operasional</span><br/>
                        Senin – Sabtu (8 am – 9 pm)<br/>
                        Minggu SESUAI KESEPAKATAN</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default ContactPage;