import React ,{useState, useEffect} from 'react';
import Axios from 'axios';
import Cookies from "universal-cookie";
import Swal from 'sweetalert2'
import { koneksi } from '../../../environtment';
import MapPaginationComponent from '../../helper/paginationComponent';

const cookies = new Cookies();

function LayananListComponentAdmin(){
    const [page, setPage ] =useState(0)
    const [pagination, setPagination ] =useState(0)
    const [blogData, setBlogData ] =useState([])
    var user = JSON.parse(localStorage.getItem("data"))
    
    useEffect(() => {
       getLayananAdmin(page)
      },[]);
    const getLayananAdmin=(page)=>{
        Axios.post(`${koneksi}/kunci/getlayanan`,{
            page:page*10,unique:page*10
        }).then((res)=>{
            setBlogData(res.data.result)
            setPagination(res.data.pagination)
        })
    }
    const deleteLayanan=(status_layanan,id)=>{
        Axios.post(`${koneksi}/kunci/updatestatuslayanan`,{
            status_layanan,id
        }).then((res)=>{
            Swal.fire('success', 'Layanan berhasil di update', 'success').then(()=>{
                getLayananAdmin(page)
            })
            
        })
    }
    const mapData=()=>{
        var data = blogData.map((item,i)=>{
            return(
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{item.nama}</td>
                    <td><img src={`https://storage.siapptn.com/image/blog/${item.foto}`} width="50px"/></td>
                    <td><a href={`/update-layanan/${item.id}`}><button className="btn btn-warning">Edit</button></a>{` `} {item.status_layanan == "active"?<button className="btn btn-danger" onClick={()=>deleteLayanan("deactive",item.id)}>Hapus Layanan</button>:<button className="btn btn-success" onClick={()=>deleteLayanan("active",item.id)}>Restore Layanan</button>}</td>
                </tr>
            )
        })
        return data
    }
    const roleTable=()=>{
        return(
            <div className="mt-4">
                <p>Tambah layanan yang sudah ditangani</p>
                <a href="/tambah-layanan" className="btn btn-success mb-4">Tambah Layanan</a>
                <h4>Layananmu</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Foto</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapData()}
                    </tbody>
                </table>
            </div>
        )
    }
   
    if(user != undefined){
        return(
            <div className="container mt-5">
                   <h1 className="pt-5">Layanan yang sudah ditangani</h1>
                    <div className="p-3 mt-5">
                        {roleTable()}
                        {MapPaginationComponent(pagination,page,setPage,getLayananAdmin)}
                    </div>
            </div>
         )
}else{
    return window.location.href ='/'
}
   
}
export default LayananListComponentAdmin;