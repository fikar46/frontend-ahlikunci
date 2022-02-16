import React, {  } from 'react';

const FooterPage = (props) => {
 var kontak = props.kontak
  return (
  <div className="bg-black">
       <div className="container p-5">  
            <div className="row">
                <div className="col-12 col-md-3">
                   <img src="https://zkeys.id/logo.png" width='150px' alt="logo_zkeys"/>
                   <div className="col-md-12 mt-3">
                    <a href={kontak.facebook} target="_blank" className="text-utama" style={{textDecoration:'none'}}><span className="pr-5 icon-sosmed"><i className='fab fa-facebook'></i></span></a>
                    <a href={kontak.instagram} target="_blank" className="text-utama" style={{textDecoration:'none'}}><span className="pr-5 icon-sosmed"><i className='fab fa-instagram'></i></span></a>
                    <a href={kontak.youtube} target="_blank" className="text-utama" style={{textDecoration:'none'}}><span className="pr-5 icon-sosmed"><i className='fab fa-youtube'></i></span></a>
                    <a href={kontak.twitter} target="_blank" className="text-utama" style={{textDecoration:'none'}}><span className="pr-5 icon-sosmed"><i className='fab fa-twitter'></i></span></a>
                   </div>
                </div>
                <div className="col-12 col-md-3">
                    <h4 className="text-utama">Tentang kami</h4>
                    <p className="text-white">Kami melayani service kunci mobil yang mengalami kerusakan akibat patah, hilang / lost key, tidak terdeteksi sistem kunci keyless, pembuatan kunci baru. Melayani semua merk dan type mobil. Silahkan konsultasikan masalah kunci mobil Anda kepada kami. Dengan senang hati kami akan membantu menemukan solusi kunci mobil Anda.</p>
                </div>
                <div className="col-12 col-md-3">
                    <h4 className="text-utama">Lokasi workshop</h4>
                            <p className="text-white">{kontak.address}</p>
                            <hr/>
                    <p className="text-white"><span className="font-weight-bold ">Jam Operasional</span><br/>
                    Senin – Sabtu (8 am – 9 pm)<br/>
                    Minggu SESUAI KESEPAKATAN</p>
                </div>
                <div className="col-12 col-md-3">
                    <h4 className="text-utama">Kontak kami</h4>
                    <div className="">
                        <p className="text-white">Segera hubungi kami untuk informasi selengkapnya mengenai jasa ahli kunci mobil, anda bisa datang ke workshop kami atau kami langsung meluncur ke lokasi anda!</p>
                        <a href={`https://api.whatsapp.com/send?phone=${kontak.whatsapp}`} className="text-utama" style={{textDecoration:'none'}}><i className='fab fa-whatsapp'></i> {kontak.whatsapp}</a><br/>
                        <a href={`tel:${kontak.telphone}`} className="text-utama" style={{textDecoration:'none'}}><i className='fas fa-phone'></i> {kontak.telphone}</a>
                    
                    </div>
                </div>
            </div>
            <div className="">
               
            </div>
        </div>
  </div>
  );
}

export default FooterPage;