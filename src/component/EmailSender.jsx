import React, { useState } from 'react';
import axios from 'axios';
import { koneksi } from '../environtment';
import Swal from 'sweetalert2';

const EmailSenderComponent = (props) => {
    const kontak = props.kontak;
    const [loading,setLoading] = useState(false)
    const sendEmail=()=>{
        setLoading(true)
        var nama = document.getElementById('nama').value;
        var email = document.getElementById('email').value;
        var pertanyaan = document.getElementById('pertanyaan').value;
        var whatsapp = document.getElementById('whatsapp').value;
        var emailAdmin = kontak.email;
        var testiObj={
            nama,email,pertanyaan,whatsapp,emailAdmin
        }
         var isEmpty = !Object.values(testiObj).every(x =>{
                return x !== ''
        });
        if(!isEmpty){
            axios.post(`${koneksi}/kunci/sendemail`,{
                nama,email,pertanyaan,whatsapp,emailAdmin
            }).then((res)=>{
                setLoading(false)
                Swal.fire("Success","Emailmu berhasil dikirim","success")
            }).catch((err)=>{
                setLoading(false)
                Swal.fire("Ooops","Emailmu gagal terkirim","error")
            })
        }else{
            Swal.fire("Ooops","Pastikan form telah terisi semua","error")
        }
    }
  return (
    <div className="bg-contact">
    <div className="container py-5">
        <h3>Tanya kami melalui email</h3>
        <div className="mb-3">
            <label htmlFor="nama" className="form-label">Nama</label>
            <input type="text" className="form-control" id="nama" aria-describedby="nama" placeholder="Masukan namamu" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Emailmu</label>
            <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Masukan emailmu" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Nomor whatsapp</label>
            <input type="number" className="form-control" id="whatsapp" aria-describedby="email" placeholder="Masukan nomor whatsappmu" />
        </div>
        <div className="mb-3">
            <label htmlFor="pertanyaan" className="form-label">Masukan pertanyaan</label>
            <textarea type="text" className="form-control form-lg" id="pertanyaan" aria-describedby="pertanyaan" placeholder="Masukan pertanyaanmu" />
        </div>
        <div className="text-center">
            {!loading?<button className="btn btn-utama btn-lg" onClick={sendEmail}>Submit pertanyaan</button>:<button className="btn btn-utama btn-lg" disabled>Loading mengirim email</button>}
        </div>
    </div>
</div>
  );
}

export default EmailSenderComponent;