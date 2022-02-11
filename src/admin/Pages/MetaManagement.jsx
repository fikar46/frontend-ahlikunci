import React, { useState, useEffect } from 'react';
import HeaderPageAdmin from '../component/navbar';
import axios from 'axios';
import { koneksi } from '../../environtment';
import Swal from 'sweetalert2';

const MetaManagementAdmin = (props) => {
    const [meta,setMeta] = useState({})
    const [titleLength,setTitleLength] = useState(0);
    const [descLength,setDescLength] = useState(0)
    useEffect(()=>{
        getMeta()
    },[])
const getMeta=()=>{
    axios.post(`${koneksi}/kunci/getmeta`).then((res)=>{
        setMeta(res.data[0])
    })
}
const textCounter=(e)=>{
   if(e.target.id == "title"){
        setTitleLength(e.target.value.length)
   }else{
       setDescLength(e.target.value.length)
   }
}
const updateMeta=()=>{
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    console.log(title.length,description.length)
    if(title.length > 60){
        alert("Title harus dibawah 60 karakter")
    }else{
        if(description.length > 200){
            alert("Deskripsi harus dibawah 200 karakter")
        }else{
            var testiObj={
                title,description
            }
             var isEmpty = !Object.values(testiObj).every(x =>{
                    return x !== ''
            });
            if(!isEmpty){
                axios.post(`${koneksi}/kunci/updatemeta`,{
                    id:meta.id,title,description
                }).then((res)=>{
                    Swal.fire('Success','Kontak berhasil di update','success')
                    getMeta()
                })
            }else{
                Swal.fire("oops","Form masih ada yang kosong cek kembali!","error")
            }
        }
    }
   
   
}
  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
            <div className="container mt-5">
                <h1>Meta management</h1>
                <div className="mb-3 col-8">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="Masukan title untuk halaman depan" defaultValue={meta.title} onChange={textCounter}/>
                   <div className="d-flex justify-content-end"> {meta.title != undefined? <div >{titleLength>0 ? <p>{titleLength<=60?<span>{titleLength}</span>:<span className="text-danger">{titleLength}</span>}</p>:<p className="text-right">{meta.title.length}</p>}</div>:<div></div>}</div>
                </div>
                <div className="mb-3 col-8">
                    <label htmlFor="description" className="form-label">Meta Description</label>
                    <textarea type="text" className="form-control" id="description" aria-describedby="description" placeholder="Masukan description untuk halaman depan" defaultValue={meta.description} onChange={textCounter}/>
                    <div className="d-flex justify-content-end"> {meta.description != undefined? <div >{descLength>0 ? <p>{descLength<=200?<span>{descLength}</span>:<span className="text-danger">{descLength}</span>}</p>:<p className="text-right">{meta.description.length}</p>}</div>:<div></div>}</div>
                </div>
                <button className="btn btn-success" onClick={updateMeta}>Submit meta</button>
            </div>
        </div>
        
   </div>
  );
}

export default MetaManagementAdmin;