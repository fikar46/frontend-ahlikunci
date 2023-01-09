import React, { useState } from 'react';
import { Input } from 'reactstrap';
import Axios  from 'axios';
import Swal from 'sweetalert2';
import { koneksi } from '../../../environtment';
import Resizer from "react-image-file-resizer";
const LayananCreateComponentAdmin = (props) => {
    const [thumbnailName, setThumbnailName] = useState("Upload Foto Layanan")
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
        const img = await resizeFile(file,imageData);
       if(nama != ""){
        if(img != undefined){
            var blob = img.slice(0, img.size, 'image/webp');
            var imageName = 'thumbnail_blog'+'_'+Date.now()+'.webp'
            var newFile = new File([blob], `${imageName}`, {type: 'image/webp'});
            formData.append('files', newFile,newFile.name)
            var namaThumbnail = newFile.name
            Axios.post(`https://storage.siapptn.com/uploadblog`,formData)
            .then((res) => {
                Axios.post(`${koneksi}/kunci/createlayanan`,{
                   nama,foto:namaThumbnail,status_layanan:"active"
                }).then((res)=>{
                    Swal.fire('success', 'Layanan telah berhasil diupload', 'success').then(()=>{
                        window.location.href="/layanan-management"
                    })
                })
            })
            .catch((err) =>{
            Swal.fire('Oops...', 'Maaf thumbnail gagal terupload harap diulang kembali, pastikan terhubung internet dengan baik.', 'error')
                console.log(err)
            }) 
           }else{
                Swal.fire("oops","Thumbnail layanan belum ter upload","error")
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
            <input type="text" className="form-control" id="nama" aria-describedby="nama" placeholder="Masukan nama layanan" />
        </div>
        <div className="mb-3 col-8">
            <label htmlFor="judul" className="form-label">Thumbnail</label><br/>
            {thumbnailSrc !=""?<img src={thumbnailSrc} width="150px" alt="thumbnail" id="thumbnail-image"/>:""}
            <Input type="file" id="thumbnail" name="customFile" label={thumbnailName} onChange={onAddFileImageChange} />
            <small>Thumbnail akan muncul pada halaman beranda dan merupakan gambar yang muncul pertama pada testimoni</small>
        </div>
        <button className="btn btn-success" onClick={uploadLayanan}>Upload layanan</button>
   </div>
  );
}

export default LayananCreateComponentAdmin;