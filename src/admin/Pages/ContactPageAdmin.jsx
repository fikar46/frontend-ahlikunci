import React, { useEffect, useState } from 'react';
import HeaderPageAdmin from '../component/navbar';
import axios from 'axios';
import { koneksi } from '../../environtment';
import Swal from 'sweetalert2';

const ContactPageAdmin = (props) => {
    const [contact,setContact] = useState({})
    useEffect(()=>{
        getContact()
    },[])
const getContact=()=>{
    axios.post(`${koneksi}/kunci/getcontact`).then((res)=>{
        setContact(res.data[0])
    })
}
const updateContact=()=>{
    var instagram = document.getElementById('instagram').value;
    var twitter = document.getElementById('twitter').value;
    var facebook = document.getElementById('facebook').value;
    var youtube = document.getElementById('youtube').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var email = document.getElementById('email').value;
    var telphone = document.getElementById('telphone').value;
    var address = document.getElementById('address').value;
    var testiObj={
        instagram,twitter,facebook,youtube,whatsapp,email,telphone,address
    }
     var isEmpty = !Object.values(testiObj).every(x =>{
            return x !== ''
    });
    if(!isEmpty){
        axios.post(`${koneksi}/kunci/updatecontact`,{
            id:contact.id,instagram,twitter,facebook,youtube,whatsapp,email,telphone,address
        }).then((res)=>{
            Swal.fire('Success','Kontak berhasil di update','success')
            getContact()
        })
    }else{
        Swal.fire("oops","Form masih ada yang kosong cek kembali!","error")
    }
   
}
  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
           <div className="container my-5">
                <h1>Kontak Management</h1>
                <div className="mb-3 col-8">
                    <label htmlFor="instagram" className="form-label">Instagram</label>
                    <input type="text" className="form-control" id="instagram" aria-describedby="instagram" placeholder="Masukan instagram" defaultValue={contact.instagram}/>
                </div>
                <div className="mb-3 col-8">
                    <label htmlFor="twitter" className="form-label">Twitter</label>
                    <input type="text" className="form-control" id="twitter" aria-describedby="twitter" placeholder="Masukan twitter" defaultValue={contact.twitter}/>
                </div>
                <div className="mb-3 col-8">
                    <label htmlFor="facebook" className="form-label">Facebook</label>
                    <input type="text" className="form-control" id="facebook" aria-describedby="facebook" placeholder="Masukan facebook" defaultValue={contact.facebook}/>
                </div>
                <div className="mb-3 col-8">
                    <label htmlFor="youtube" className="form-label">Youtube</label>
                    <input type="text" className="form-control" id="youtube" aria-describedby="youtube" placeholder="Masukan youtube" defaultValue={contact.youtube}/>
                </div>
                <div className="mb-3 col-8">
                    <label htmlFor="whatsapp" className="form-label">Whatsapp</label>
                    <input type="number" className="form-control" id="whatsapp" aria-describedby="whatsapp" placeholder="Masukan whatsapp" defaultValue={contact.whatsapp}/>
                </div>
                <div className="mb-3 col-8">
                    <label htmlFor="telphone" className="form-label">No Telp</label>
                    <input type="number" className="form-control" id="telphone" aria-describedby="telphone" placeholder="Masukan telphone" defaultValue={contact.telphone}/>
                </div>
                <div className="mb-3 col-8">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" aria-describedby="email" placeholder="Masukan email" defaultValue={contact.email}/>
                </div>
                <div className="mb-3 col-8">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea type="text" className="form-control" id="address" aria-describedby="address" placeholder="Masukan alamat" defaultValue={contact.address}/>
                </div>
                <button className="btn btn-success" onClick={updateContact}>Simpan kontak</button>
           </div>
        </div>
        
   </div>
  );
}

export default ContactPageAdmin;