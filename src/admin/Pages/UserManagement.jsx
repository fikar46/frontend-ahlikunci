import React, { useEffect, useState } from 'react';
import HeaderPageAdmin from '../component/navbar';
import axios from 'axios';
import { koneksi } from '../../environtment';
import Swal from 'sweetalert2';

const UserManagementPage = (props) => {
    const [userList,setUserList] = useState([])
    useEffect(()=>{
        getListUser()
    },[])
    const getDataUser=()=>{
        var data = localStorage.getItem('data')
        if(data!=undefined){
            var parse = JSON.parse(data)
            var user = parse[0]
        }
        return user
    }
    const getListUser=()=>{
        axios.get(`${koneksi}/auth/getlistadminkunci`).then((res)=>{
            setUserList(res.data)
        })
    }
    const registFunc=()=>{
        var fullname = document.getElementById("nama").value;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var phone = document.getElementById("phone").value;
        if(fullname === '' || username ==='' || password == '' || phone == ''||email==''){
           alert("form masih ada yang kosong! harus diisi semua sebelum mendaftarkan admin baru")
        }else{
            axios.post(`${koneksi}/auth/register`, {
                fullname, username, email, password, phone
            }).then((res)=>{
                     if(res.data.status === 'error'){
                         alert("Username tidak tersedia")
                     }
                     else{
                         Swal.fire('Pendaftaran Berhasil', `Pendaftaran berhasil, ${res.data.username} sudah bisa login`, 'success').then(()=>{
                            window.location.reload()
                         })
                     }     
            }).catch((err)=>{
                if(!err.response){
                    Swal.fire('Oops...', 'Pendaftaran gagal. Maaf browsermu error, hapus cache dan matikan mode ringan pada chrome dihpmu atau kamu bisa membuka web siapptn di tab samaran klik setting pada chrome untuk membukanya ', 'error')
                }else if(err.response.status == 409){
                         Swal.fire('Oops...', `${err.response.data.message}`, 'error')
                }   
            }) 
        }
       
    }
    const mapListUser=()=>{
        var id_user = getDataUser().id
        var data = userList.map((item,i)=>{
            return(
                <tr>
                            <th scope="row">{i+1}</th>
                            <td>{item.nama}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.status}</td>
                            <td>{item.id == id_user? <button className="btn btn-success" disabled>Akunmu</button>: <span>{
                                item.status == 'verified'? 
                            <button className="btn-danger btn" onClick={()=>changeStatusUser("nonaktif",item)}>Nonaktifkan admin</button>:<button className="btn btn-success" onClick={()=>changeStatusUser("aktifkan",item)}>Aktifkan kembali admin</button>
                        }</span>}</td>
                        </tr>
            )
        })
        return data
    }
    const changeStatusUser=(e,item)=>{
        Swal.fire({
            title: 'Apakah kamu yakin?',
            showCancelButton: true,
            confirmButtonText: 'Yakin',
            cancelButtonText: `Tidak jadi`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                var statusBaru = e;
                if(statusBaru == "aktifkan"){
                    var status = "verified"
                }else{
                    var status = "unverified"
                }
                var unique = item.username+"_"+item.password;
                var id = item.id
                axios.post(`${koneksi}/auth/changestatususer`,{
                    id,status,unique
                }).then(()=>{
                    if(statusBaru == "aktifkan"){
                        Swal.fire("Success","Admin berhasil diaktifkan kembali","success")
                        getListUser()
                    }else{
                        Swal.fire("Success","Admin berhasil dinonaktifkan","success")
                        getListUser()
                    }
                })
            }
          })
        
    }
  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
            <div className="container mt-5">
                <h1>User Management</h1>
                
                <div className="card p-3">
                <h3>Daftarkan admin baru</h3>
                    <div className="mb-3">
                        <label htmlFor="nama" className="form-label">Nama lengkap</label>
                        <input type="text" className="form-control" id="nama" aria-describedby="nama" placeholder="nama"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="username"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="phone" className="form-control" id="phone" aria-describedby="phone" placeholder="phone"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="password"/>
                    </div>
                    <div className="justify-content-end row">
                        <div className="col-6 col-md-3">
                            <button type="button" className="btn btn-primary w-100" onClick={registFunc}>Daftarkan admin baru</button>
                        </div>
                    </div>
                </div>

                <div className="card mt-5">
                    <div className="p-3">
                    <h1>List Admin</h1>
                    <div class="table-responsive text-center">
                    
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                       {mapListUser()}
                        </tbody>
                    </table>
                    </div>
                   
                    </div>
                </div>
            </div>
            
        </div> 
   </div>
  );
}

export default UserManagementPage;