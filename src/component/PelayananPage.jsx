import React, {  } from 'react';

const PelayananPage = (props) => {
    var kontak = props.kontak
    const redirectFunc=()=>{
        window.open(`https://api.whatsapp.com/send?phone=${kontak.whatsapp}`,'_blank')
    }
  return (
  <div className="bg-layanan">
       <div className="container mt-5 p-3">
            <h2 className="text-center text-white py-5">Kami melayani</h2>
          
                <div className="row">
               
                    <div className="col-12 col-md-4 mb-4">
                  
                        <div className="card p-3 pointer" onClick={redirectFunc}>
                            <div className="image-card-pelayanan">
                                <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                            </div>
                            <h4>Service Kunci Mobil</h4>
                            <p>Kami melayani service kunci mobil yang mengalami kerusakan akibat patah, hilang/lost key, tidak terdeteksi sistem kunci keyless, pembuatan kunci baru. Melayani semua merk dan jenis mobil.</p>
                        </div>
                    </div>
                   
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card p-3 pointer" onClick={redirectFunc}>
                            <div className="image-card-pelayanan">
                                    <img src="./asset/duplikat.jpeg" className="card-img-top img-card-size" alt=""></img>
                            </div>
                            <h4>Duplikat Kunci Mobil</h4>
                            <p>Kami melayani service kunci mobil yang mengalami kerusakan akibat patah, hilang/lost key, tidak terdeteksi sistem kunci keyless, pembuatan kunci baru. Melayani semua merk dan jenis mobil.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card p-3 pointer" onClick={redirectFunc}>
                            <div className="image-card-pelayanan">
                                    <img src="./asset/new-key.jpeg" className="card-img-top img-card-size" alt=""></img>
                            </div>
                            <h4>Bikin Kunci Baru Mobil</h4>
                            <p>Kami Juga Melayani Pembuatan Kunci Baru Untuk Mobil, Immobilizer dan SmartKey. Pembuatan Kunci Baru Karena Kunci Lama Rusak, Hilang atau Tidak Punya Kunci Cadangan.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card p-3 pointer" onClick={redirectFunc}>
                            <div className="image-card-pelayanan">
                                <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                            </div>
                            <h4>Ahli Kunci Semua Merk Mobil</h4>
                            <p>Melayani service kunci mobil untuk semua merk dan type mobil seperti BMW, Mercedes Benz, Toyota, Honda, Peugeot, Volkswagen, Ford, Chevrolet, dll.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card p-3 pointer" onClick={redirectFunc}>
                            <div className="image-card-pelayanan">
                                    <img src="./asset/immobilizer.jpeg" className="card-img-top img-card-size" alt=""></img>
                            </div>
                            <h4>Service Kunci Immobilizer</h4>
                            <p>Kami Juga Melayani Pembuatan Kunci Baru Untuk Mobil dengan sistem Immobilizer.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <div className="card p-3 pointer" onClick={redirectFunc}>
                            <div className="image-card-pelayanan">
                                    <img src="./asset/smartkey.jpeg" className="card-img-top img-card-size" alt=""></img>
                            </div>
                            <h4>Service Kunci Smart Key</h4>
                            <p>Kami Juga Melayani Pembuatan Kunci Baru Untuk Mobil dengan sistem Smart Key.</p>
                        </div>
                    </div>
                
                    
                    
                </div>
            
        </div>
  </div>
  );
}

export default PelayananPage;