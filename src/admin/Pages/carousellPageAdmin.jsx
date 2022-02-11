import React, { useEffect, useState } from 'react';
import HeaderPageAdmin from '../component/navbar';
import { Input } from 'reactstrap';
import axios from 'axios';
import { koneksi } from '../../environtment';
import Swal from 'sweetalert2';

const CarousellPageAdmin = (props) => {
    const [carousell,setCarousell] = useState({})
    useEffect(()=>{
        getCarousell()
    },[])
    const getCarousell=()=>{
        axios.post(`${koneksi}/kunci/getcarousell`).then((res)=>{
            setCarousell(res.data[0])
        })
    }
    const updateCarousell=(e)=>{
        var formData = new FormData()
        var file = document.getElementById(e);
        if(file.files[0] != undefined){
            var blob = file.files[0].slice(0, file.files[0].size, 'image/png');
            var imageName = 'carousell'+'_'+Date.now()+'.png'
            var newFile = new File([blob], `${imageName}`, {type: 'image/png'});
            formData.append('files', newFile,newFile.name)
            var namaThumbnail = newFile.name
            axios.post(`https://storage.siapptn.com/uploadblog`,formData)
            .then((res) => {
                axios.post(`${koneksi}/kunci/updatecarouselll`,{
                    id:1,[e]:namaThumbnail
                }).then((res)=>{
                    Swal.fire('Success','Gambar berhasil diupload','success')
                    getCarousell()
                }).catch((err)=>{
                    
                })
            })
        }else{
            Swal.fire('Oops','Gambar belum diupload, harap pilih file terlebih dahulu untuk diupload','error')
        }
       
    }
  return (
   <div className="">
        <HeaderPageAdmin/>
        <div className="content-page-after-header">
            <div className="container">
               <div className="mt-5">
                    <h1>Carousell Management</h1>
                    <div className="mb-5 col-12 col-md-4">
                        <label htmlFor="judul" className="form-label">Carousel 1</label><br/>
                        <img src={`https://storage.siapptn.com/image/blog/${carousell.carousell_1}`} width="200px" alt="carousell_1" className="mt-3"/>
                        <Input type="file" id="carousell_1" name="customFile" />
                        <button className="btn btn-success mt-3" onClick={()=>{updateCarousell('carousell_1')}}>Update Carousel 1</button>
                    </div> 
                    <div className="mb-5 col-12 col-md-4">
                        <label htmlFor="judul" className="form-label">Carousel 2</label><br/>
                        <img src={`https://storage.siapptn.com/image/blog/${carousell.carousell_2}`} width="200px" alt="carousell_2" className="mt-3"/>
                        <Input type="file" id="carousell_2" name="customFile" />
                        <button className="btn btn-success mt-3" onClick={()=>{updateCarousell('carousell_2')}}>Update Carousel 2</button>
                    </div> 
                    <div className="mb-4 col-12 col-md-4">
                        <label htmlFor="judul" className="form-label">Carousel 3</label><br/>
                        <img src={`https://storage.siapptn.com/image/blog/${carousell.carousell_3}`} width="200px" alt="carousell_3" className="mt-3"/>
                        <Input type="file" id="carousell_3" name="customFile" />
                        <button className="btn btn-success mt-3" onClick={()=>{updateCarousell('carousell_3')}}>Update Carousel 3</button>
                    </div> 
                    
               </div>
            </div>  
        </div>
        
   </div>
  );
}

export default CarousellPageAdmin;