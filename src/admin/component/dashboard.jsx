import React, { useEffect, useState } from 'react';
import { keepLogin } from '../helper/authGuard';

const DashboardPageAdmin = (props) => {
    const [data, setData] = useState({});
    useEffect(()=>{
        var data = localStorage.getItem('data')
        if(data!=undefined){
            var parse = JSON.parse(data)
            setData(parse[0])
            keepLogin(parse[0].username,parse[0].id)
        }else{
            window.location.href = '/login-admin'
        }
        
    },[])
  return (
   <div className="container mt-5">
        <h1 className="mb-5">Selamat datang <span className="font-weight-bold">{data.username}</span></h1>

        <div className="row">
            <div className="col-12 col-md-3 mb-3">
                <div className="card p-3">
                    <h3 className="card-head">Testimoni</h3>
                    <p className="mt-3">Tambah dan ubah Testimoni dari pelanggan</p>
                    <a className="btn btn-success" href="/testimoni-management">Buka</a>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
                <div className="card p-3">
                    <h3 className="card-head">Layanan</h3>
                    <p className="mt-3">Tambah dan ubah pelayanan yang sudah ditangani </p>
                    <a href="/layanan-management" className="btn btn-success">Buka</a>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
                <div className="card p-3">
                    <h3 className="card-head">Carousell</h3>
                    <p className="mt-3">Ubah gambar carousell yang tampil pada halaman utama</p>
                    <a href="/carousell-management" className="btn btn-success">Buka</a>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
                <div className="card p-3">
                    <h3 className="card-head">Kontak</h3>
                    <p className="mt-3">Ubah kontak, alamat dan sosial media yang ada</p>
                    <a href="/kontak-management" className="btn btn-success">Buka</a>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
                <div className="card p-3">
                    <h3 className="card-head">User Management</h3>
                    <p className="mt-3">Tambah user untuk memanage website ini</p>
                    <a href="/user-management" className="btn btn-success">Buka</a>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-3">
                <div className="card p-3">
                    <h3 className="card-head">Meta tag Management</h3>
                    <p className="mt-3">Tambah atau edit meta untuk header</p>
                    <a href="/meta-management" className="btn btn-success">Buka</a>
                </div>
            </div>
        </div>
   </div>
  );
}

export default DashboardPageAdmin;