import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import Axios  from 'axios';
import Swal from 'sweetalert2';
import { koneksi } from '../../../environtment';
import { useParams } from 'react-router';
import Resizer from "react-image-file-resizer";

const LayananUpdateComponentAdmin = (props) => {
    let { id } = useParams();
    const [thumbnailName, setThumbnailName] = useState("Upload Foto Layanan")
    const [layanan, setLayanan] = useState({})
    const [thumbnailSrc, setThumbnailSrc] = useState("")
    const onAddFileImageChange = () => {
        if(document.getElementById("thumbnail").files[0] !== undefined) {
            setThumbnailName(document.getElementById("thumbnail").files[0].name)
            setThumbnailSrc(window.URL.createObjectURL(document.getElementById("thumbnail").files[0]))
        }
        else {
            setThumbnailName("Upload thumbnail blog")
        }
    }
    useEffect(() => {
        getLayananAdminByid(id)
       },[id]);
     const getLayananAdminByid=(id)=>{
         Axios.post(`${koneksi}/kunci/getlayananbyid`,{
            id
         }).then((res)=>{
             setLayanan(res.data[0])
             setThumbnailSrc(`https://storage.siapptn.com/image/blog/${res.data[0].foto}`)
         })
     }
    const resizeFile = (file,imageData) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
            file.files[0],
            imageData.clientWidth,
            imageData.clientHeight,
            "WEBP",
            100,
            0,
            (file) => {
                resolve(file);
            },
            "file"
            );
    });
    const uploadLayanan=async()=>{
        var nama = document.getElementById("nama").value;
        var formData = new FormData()
        var file = document.getElementById('thumbnail');
        var imageData = document.getElementById("thumbnail-image");
       
       if(nama != ""){
        if(file.files[0] != undefined){
            const img = await resizeFile(file,imageData);
            var blob = img.slice(0, img.size, 'image/webp');
            var imageName = 'thumbnail_blog'+'_'+Date.now()+'.webp'
            var newFile = new File([blob], `${imageName}`, {type: 'image/webp'});
            formData.append('files', newFile,newFile.name)
            var namaThumbnail = newFile.name
            Axios.post(`https://storage.siapptn.com/uploadblog`,formData)
            .then((res) => {
                Axios.post(`${koneksi}/kunci/updatelayanan`,{
                   id,nama,foto:namaThumbnail,status_layanan:"active"
                }).then((res)=>{
                    Swal.fire('success', 'Layanan telah berhasil diupdate', 'success').then(()=>{
                        window.location.href="/layanan-management"
                    })
                })
            })
            .catch((err) =>{
            Swal.fire('Oops...', 'Maaf thumbnail gagal terupload harap diulang kembali, pastikan terhubung internet dengan baik.', 'error')
                console.log(err)
            }) 
           }else{
                Axios.post(`${koneksi}/kunci/updatelayanan`,{
                    id,nama,foto:layanan.foto,status_layanan:"active"
                }).then((res)=>{
                    Swal.fire('success', 'Layanan telah berhasil diupdate', 'success').then(()=>{
                        window.location.href="/layanan-management"
                    })
                })
           }
       }else{
        Swal.fire("oops","Form nama layanan wajib diisi","error")
       }
    }
  return (
   <div className="container mt-5">
        <h1 className="pt-5">Tambah layanan yang sudah ditangani</h1>
        <div className="mb-3 col-8">
            <label htmlFor="nama" className="form-label">Nama Layanan (Bisa menggunakan nama atau merk mobil)</label>
            <input type="text" className="form-control" id="nama" aria-describedby="nama" placeholder="Masukan nama layanan" defaultValue={layanan.nama}/>
        </div>
        <div className="mb-3 col-8">
            <label htmlFor="judul" className="form-label">Thumbnail</label><br/>
            {/* <img src={`https://storage.siapptn.com/image/blog/${layanan.foto}`} width="150px"/> */}
            <img src={thumbnailSrc} width="150px" alt="thumbnail" id="thumbnail-image"/>
            <Input type="file" id="thumbnail" name="customFile" label={thumbnailName} onChange={onAddFileImageChange} />
            <small>Thumbnail akan muncul pada halaman beranda dan merupakan gambar yang muncul pertama pada testimoni</small>
        </div>
        <button className="btn btn-success" onClick={uploadLayanan}>Upload layanan</button>
   </div>
  );
}

export default LayananUpdateComponentAdmin;