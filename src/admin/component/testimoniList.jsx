import React ,{useState, useEffect} from 'react';
import Axios from 'axios';
import Cookies from "universal-cookie";
import Swal from 'sweetalert2'
import { koneksi } from '../../environtment';
import MapPaginationComponent from '../helper/paginationComponent';

const cookies = new Cookies();

function TesimoniListPageAdmin(){
    const [page, setPage ] =useState(0)
    const [blogData, setBlogData ] =useState([])
    const [pagination, setPagination ] =useState(0)
    var user = JSON.parse(localStorage.getItem("data"))
    
    useEffect(() => {
       getBlogAdmin(page)
      },[]);
    const getBlogAdmin=(page)=>{
        Axios.post(`${koneksi}/kunci/getalltestimoni`,{
            page:page*10,unique:page*10
        }).then((res)=>{
            setBlogData(res.data.result)
            setPagination(res.data.pagination)
        })
    }
    const deleteTesti=(status_blog,id)=>{
        Axios.post(`${koneksi}/kunci/updatestatustestimoni`,{
            status_blog,id
        }).then((res)=>{
            Swal.fire('success', 'Testimoni berhasil di update', 'success').then(()=>{
                getBlogAdmin(page)
            })
            
        })
    }
    const mapData=()=>{
        var data = blogData.map((item,i)=>{
            return(
                <tr>
                                <th scope="row">{i+1}</th>
                                <td>{item.judul}</td>
                                <td>{item.status_blog}</td>
                                <td><a href={`/update-testimoni/${item.id}`}><button className="btn btn-warning">Edit</button></a>{` `} {item.status_blog == "publish"?<button className="btn btn-danger" onClick={()=>deleteTesti("reject",item.id)}>Hapus Testimoni</button>:<button className="btn btn-success" onClick={()=>deleteTesti("publish",item.id)}>Restore Testimoni</button>}</td>
                            </tr>
            )
        })
        return data
    }
    const roleTable=()=>{
        return(
            <div className="mt-4">
                <p>Create testimoni</p>
                <a href="/buat-testimoni" className="btn btn-success mb-4">Buat Testimoni</a>
                <h4>Testimoni</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Judul</th>
                            <th scope="col">status</th>
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
                   <h1 className="pt-5">Testimoni pelanggan</h1>
                    <div className="p-3 mt-5">
                       
                       
                        {roleTable()}
                        {MapPaginationComponent(pagination,page,setPage,getBlogAdmin)}
                    </div>
            </div>
         )
}else{
    return window.location.href ='/'
}
   
}
export default TesimoniListPageAdmin;