
import React, { useState } from 'react';
import axios from 'axios';
import { koneksi } from '../environtment';
import Swal from 'sweetalert2';
import HeaderPageAdmin from '../admin/component/navbar';
import Cookies from "universal-cookie";

const cookies = new Cookies();
const ForgetPages = (props) => {
    const [loading,setLoading] = useState(false)
    const gantiPassword=()=>{
        var email = document.getElementById("email").value;
        setLoading(true)
       if(email == ""){
            Swal.fire("Oops","Form wajib diisi","error")
       }else{
            axios.post(`${koneksi}/auth/forget`,{
                email
            }).then((res)=>{
                setLoading(false)
                Swal.fire("Sukses","Cek inbox emailmu untuk mendapatkan link untuk merubah password","success").then(()=>{
                    onLogOutSelect()
                })
            }).catch((err)=>{
                setLoading(false)
                Swal.fire("Error","Email salah atau tidak ada","error")
            })
       
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
var loadingButton=()=>{
    if(loading){
        return(
            <button className="btn btn-success" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        )
    }else{
        return(
            <button className="btn btn-success" onClick={gantiPassword}>Submit</button>
        )
    }
}
  return (
    <div>
       <HeaderPageAdmin/>
        <div className="container content-page-after-header">
        <div className="mb-3"></div>
            <h3>Forget Password</h3>
            <div className="card p-4 col-12 col-md-6 mt-5">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email akun</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Masukan email" />
                </div>
                {loadingButton()}
            </div>
        </div>
    </div>
  );
}

export default ForgetPages;