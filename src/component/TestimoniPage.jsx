import React, {  } from 'react';

const TestimoniPage = (props) => {

  return (
  <div className="bg-layanan">
       <div className="container mt-5 p-3">
            <h1 className="text-center text-white py-5">Testimoni pelanggan kami</h1>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <div className="card p-3">
                        <div className="image-card-testimoni">
                            <img src="https://serrurier-laval.ca/wp-content/uploads/2019/08/Car-Keys-Remotes-Replacement-%e2%80%8b.jpg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <h4>Service Kunci Mobil</h4>
                        <p>Kami melayani service kunci mobil yang mengalami kerusakan akibat patah, hilang/lost key, tidak terdeteksi sistem kunci keyless, pembuatan kunci baru. Melayani semua merk dan jenis mobil.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card p-3">
                        <div className="image-card-testimoni">
                                <img src="./asset/duplikat.jpeg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <h4>Duplikat Kunci Mobil</h4>
                        <p>Kami melayani service kunci mobil yang mengalami kerusakan akibat patah, hilang/lost key, tidak terdeteksi sistem kunci keyless, pembuatan kunci baru. Melayani semua merk dan jenis mobil.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <div className="card p-3">
                        <div className="image-card-testimoni">
                                <img src="./asset/duplikat.jpeg" className="card-img-top img-card-size" alt=""></img>
                        </div>
                        <h4>Duplikat Kunci Mobil</h4>
                        <p>Kami melayani service kunci mobil yang mengalami kerusakan akibat patah, hilang/lost key, tidak terdeteksi sistem kunci keyless, pembuatan kunci baru. Melayani semua merk dan jenis mobil.</p>
                    </div>
                </div>
            </div>
            <div className="text-center text-white mb-4">
               <button className="btn btn-utama btn-lg"> Lihat testimoni lainnya</button>
            </div>
        </div>
  </div>
  );
}

export default TestimoniPage;