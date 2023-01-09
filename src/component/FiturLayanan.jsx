import React, {  } from 'react';

const FiturLayanan = (props) => {

  return (
   <div className="border border-bottom-fitur">
       <div className="container ">
        <div className="row ">
            <div className="col-6 col-md-3 p-3 text-center border-fitur">
                <img src="./feature/trust.webp" alt="feature_trust" className="img-fitur "/>
                <p>Terpecaya</p>
            </div>
            <div className="col-6 col-md-3 p-3 border-left border-right text-center border-fitur">
                <img src="./feature/employee.webp" alt="feature_employee" className="img-fitur"/>
                <p>Profesional</p>
            </div>
            <div className="col-6 col-md-3 p-3 border-right text-center border-fitur">
                <img src="./feature/fast.webp" alt="feature_fast" className="img-fitur"/>
                <p>Proses Cepat</p>
            </div>
            <div className="col-6 col-md-3 p-3 text-center border-fitur">
                <img src="./feature/coins.webp" alt="feature_money" className="img-fitur"/>
                <p>Harga Terjangkau</p>
            </div>
      </div>
   </div>
   </div>
  );
}

export default FiturLayanan;