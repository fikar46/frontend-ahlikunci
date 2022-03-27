
import React, {  } from 'react';
import axios from 'axios';
import { koneksi } from '../environtment';
import Swal from 'sweetalert2';
import HeaderPageAdmin from '../admin/component/navbar';
import Cookies from "universal-cookie";
import HeaderPage from './Header';
const queryString = require('query-string');
const cookies = new Cookies();
const ChangePasswordPages = (props) => {
    
    const gantiPassword=()=>{
     
        const parsed = queryString.parse(window.location.search);
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("konfirm-password").value;

       if(password == "" || confirmPassword == ""){
            Swal.fire("Oops","Form wajib diisi","error")
       }else{
        if(password === confirmPassword){
            axios.post(`${koneksi}/auth/changepassword`,{
                id:parsed.id,password
            }).then((res)=>{
                Swal.fire("Sukses","Ganti password berhasil, kamu akan terlogout dan bisa mencoba login kembali","success").then(()=>{
                    onLogOutSelect()
                })
            })
        }else{
            Swal.fire("Oops","Password dan konfirm password tidak sesuai","error")
        }
       }
    }
    const onLogOutSelect=()=>{
        if(window.location.hostname == 'localhost'){
          cookies.remove('dataUser');
          cookies.remove('idUser');
          cookies.remove('popupafterlogin');
          cookies.remove('u-nkt');
        }else{
          cookies.remove('dataUser',{domain:".zkeys.id"})
          cookies.remove('idUser',{domain:".zkeys.id"})
          cookies.remove('popupafterlogin',{domain:".zkeys.id"})
          cookies.remove('u-nkt',{domain:".zkeys.id"})
          cookies.remove('dataUser');
          cookies.remove('idUser');
          cookies.remove('popupafterlogin');
          cookies.remove('u-nkt');
          
        }
        localStorage.removeItem('data');
        window.location.href="/login-admin"
      }
  return (
    <div>
        <HeaderPage kontak={props.kontak}/>
        <div className="container content-page-after-header">
        <div className="mb-3"></div>
            <h3>Ganti Password</h3>
            <div className="card p-4 col-12 col-md-6 mt-5">
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password Baru</label>
                    <input type="password" className="form-control" id="password" aria-describedby="password" placeholder="Ketik password baru" />
                </div>
                <div className="mb-3">
                    <label htmlFor="konfirm-password" className="form-label">Konfirmasi password baru</label>
                    <input type="password" className="form-control" id="konfirm-password" aria-describedby="konfirm-password" placeholder="Ketik ulang password barumu" />
                </div>
                <button className="btn btn-success" onClick={gantiPassword}>Ganti password</button>
            </div>
        </div>
    </div>
  );
}

export default ChangePasswordPages;