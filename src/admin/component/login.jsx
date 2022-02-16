import React, {  } from 'react';
import Swal from 'sweetalert2';
import Cookies from "universal-cookie";
import axios from 'axios';
import { koneksi } from '../../environtment';
const cookies = new Cookies();
const LoginPageAdmin = (props) => {
    const loginFunc=()=>{
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        axios.post(`${koneksi}/auth/signin`, {
            username,
            password
        }).then((res)=> {
            if(res.data.length>0){
                localStorage.setItem("data",JSON.stringify(res.data))
                if(window.location.hostname == 'localhost'){
                    cookies.set('u-nkt',res.data[0].token,{path: '/'})
                    cookies.set('dataUser',username,{path: '/'})
                    cookies.set('idUser',res.data[0].id,{path: '/'})
                }else{
                    cookies.set('u-nkt',res.data[0].token,{path: '/',domain:".zkeys.id"})
                    cookies.set('dataUser',username,{path: '/',domain:".zkeys.id"})
                    cookies.set('idUser',res.data[0].id,{path: '/',domain:".zkeys.id"})
                }
                window.location.href='/adminkeys'
            }else{
                // dispatch({type: USER_NOT_FOUND})
            }
        }).catch((err)=>{
            if(err.response != undefined){
                if(err.response.status == 404){
                    Swal.fire('Oops...', `Proses login gagal, ${err.response.data.message}!!`, 'error')
                }else if(err.response.status == 408){
                    Swal.fire('Oops...', 'Maaf server sedang penuh, harap coba kembali nanti ya!', 'error')
                }else if(err.response.status == 409){
                    Swal.fire('Oops...', `Proses login gagal, ${err.response.data.message}!!`, 'error')
                }else{
                    Swal.fire('Oops...', 'Proses login gagal. Maaf browsermu error, hapus cache dan matikan mode ringan pada chrome dihpmu atau kamu bisa membuka web siapptn di tab samaran klik setting pada chrome untuk membukanya ', 'error')
                }
            }else{
                Swal.fire('Oops...', `Maaf server sedang penuh, harap coba kembali nanti ya!`, 'error')
                .then(() => {  
                    if(window.location.hostname == 'localhost'){
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                      }else{
                        cookies.remove('dataUser',{domain:".zkeys.id"})
                        cookies.remove('idUser',{domain:".zkeys.id"})
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                      }
                      localStorage.removeItem('data');
                    window.location="/login-admin"
                })
            }
        }) 
    }
  return (
   <div className="container ">
      
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
            <div className="card p-5 mt-5">
                <h1 className="text-center mb-5">Login Zkeys.id</h1>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="username"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="password"/>
                </div>
                <div className="justify-content-end row">
                    <div className="col-6 col-md-3">
                        <button type="button" className="btn btn-primary w-100" onClick={loginFunc}>Login</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
     
        
   </div>
  );
}

export default LoginPageAdmin;