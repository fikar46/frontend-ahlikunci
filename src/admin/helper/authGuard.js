import axios from "axios";
import { koneksi } from "../../environtment";
import Swal from 'sweetalert2';
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const keepLogin =(username,id_user)=>{
        var token = cookies.get('u-nkt')
        var user = JSON.parse(localStorage.getItem("data"))
        if(user != undefined){
            axios.post(`${koneksi}/auth/keeplogin`,{
                username,
                token,
                data:false,
                id:id_user
            }).then((res)=>{
                
            }).catch((err)=>{
            if(!err.response){           
            //    window.location="/"
                Swal.fire('Oops...', `Sepertinya sinyal atau browsermu sedang bermasalahnih cek lagi ya`, 'error')
                .then(() => {
                    if(window.location.hostname == 'localhost'){
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                        cookies.remove('u-nkt');
                      }else{
                        cookies.remove('dataUser',{domain:".siapptn.com"})
                        cookies.remove('idUser',{domain:".siapptn.com"})
                        cookies.remove('u-nkt',{domain:".siapptn.com"});
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                        cookies.remove('u-nkt');
                      }
                      localStorage.removeItem('data');
                    window.location="/"
                })
            
                }else if(err.response.status == 404){
                    Swal.fire('Oops...', `${err.response.data.message}`, 'error')
                    .then(() => {
                        if(window.location.hostname == 'localhost'){
                            cookies.remove('dataUser');
                            cookies.remove('idUser');
                            cookies.remove('u-nkt');
                          }else{
                            cookies.remove('dataUser',{domain:".siapptn.com"})
                            cookies.remove('idUser',{domain:".siapptn.com"})
                            cookies.remove('u-nkt',{domain:".siapptn.com"});
                            cookies.remove('dataUser');
                            cookies.remove('idUser');
                            cookies.remove('u-nkt');
                          }
                          localStorage.removeItem('data');
                        window.location="/login-admin"
                    })
                }else if(err.response.status == 500){
                    Swal.fire('Oops...', `sesionmu telah habis`, 'error')
                    .then(() => {
                        if(window.location.hostname == 'localhost'){
                            cookies.remove('dataUser');
                            cookies.remove('idUser');
                            cookies.remove('u-nkt');
                          }else{
                            cookies.remove('dataUser',{domain:".siapptn.com"})
                            cookies.remove('idUser',{domain:".siapptn.com"})
                            cookies.remove('u-nkt',{domain:".siapptn.com"});
                            cookies.remove('dataUser');
                            cookies.remove('idUser');
                            cookies.remove('u-nkt');
                          }
                          localStorage.removeItem('data');
                        window.location="/login-admin"
                    })
                }
            })
            
        }else{
            axios.post(`${koneksi}/auth/keeplogin`,{
                    username,
                    token,
                    data:true,
                    id:id_user
            }).then((res)=>{
                if(res.data.length > 0 ){
                    localStorage.setItem("data",JSON.stringify(res.data))
                }
            }).catch((err)=>{
                console.log(err)
               if(!err.response){           
            //    window.location="/"
                 Swal.fire('Oops...', `Maaf server sedang penuh dikarnakan ada ribuan orang sedang online, harap coba kembali nanti`, 'error')
                .then(() => {
                    if(window.location.hostname == 'localhost'){
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                        cookies.remove('u-nkt');
                      }else{
                        cookies.remove('dataUser',{domain:".siapptn.com"})
                        cookies.remove('idUser',{domain:".siapptn.com"})
                        cookies.remove('u-nkt',{domain:".siapptn.com"});
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                        cookies.remove('u-nkt');
                      }
                      localStorage.removeItem('data');
                    window.location="/"
                })
            
             }else if(err.response.status == 404){
                Swal.fire('Oops...', `${err.response.data.message}`, 'error')
                .then(() => {
                    if(window.location.hostname == 'localhost'){
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                        cookies.remove('u-nkt');
                      }else{
                        cookies.remove('dataUser',{domain:".siapptn.com"})
                        cookies.remove('idUser',{domain:".siapptn.com"})
                        cookies.remove('u-nkt',{domain:".siapptn.com"});
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                        cookies.remove('u-nkt');
                      }
                      localStorage.removeItem('data');
                    window.location="/login-admin"
                })
               }else if(err.response.status == 500){
                Swal.fire('Oops...', `sesionmu telah habis`, 'error')
                .then(() => {
                    if(window.location.hostname == 'localhost'){
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                        cookies.remove('u-nkt');
                      }else{
                        cookies.remove('dataUser',{domain:".siapptn.com"})
                        cookies.remove('idUser',{domain:".siapptn.com"})
                        cookies.remove('u-nkt',{domain:".siapptn.com"});
                        cookies.remove('dataUser');
                        cookies.remove('idUser');
                        cookies.remove('u-nkt');
                      }
                      localStorage.removeItem('data');
                    
                    window.location="/login-admin"
                })
               }
            })
        }
    
}