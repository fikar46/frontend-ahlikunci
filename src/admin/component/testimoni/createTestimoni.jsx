import React ,{useState, useEffect} from 'react';
import { Editor, EditorTools,  EditorUtils,
    ProseMirror, } from "@progress/kendo-react-editor";
import Axios from 'axios';
import Cookies from "universal-cookie";
import { CustomInput, Form, FormGroup, Label, Input } from 'reactstrap';
import '@progress/kendo-theme-default/dist/all.css';
import Swal from 'sweetalert2'
import { insertImagePlugin } from './insertImagePlugin';
import { insertImageFiles } from './utils';
import { InsertImage } from './insertImageTool';
import { koneksi } from '../../../environtment';
import Resizer from "react-image-file-resizer";


const cookies = new Cookies();
const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  ViewHtml,
  InsertTable,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;
function CreateTestimoniAdmin(){
    const [thumbnailName, setThumbnailName] = useState("Upload thumbnail Testimoni")
    const editor = React.createRef();
    const [thumbnailSrc, setThumbnailSrc] = useState("")
    const textarea = React.createRef();
    const judul = React.useRef("");
    const [titleLength,setTitleLength] = useState(0);
    const [descLength,setDescLength] = useState(0)
    const kategori = React.useRef("");
    const caption = React.useRef("");
    const youtube = React.useRef("");
    var user = JSON.parse(localStorage.getItem("data"))
   const konten =(e)=>{
    setValue(e.value);
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
   const postKonten =async() => {
        const view = editor.current.view;
        var judulBlog = judul.current.value;
        var captionBlog = caption.current.value;
        var kategoriBlog = kategori.current.value
        var konten = EditorUtils.getHtml(view.state)
        var youtubeBlog = youtube.current.value;
        var id_user = cookies.get("idUser");
        if(judulBlog.length > 60){
            alert('Judul tidak boleh lebih dari 60 karakter')
        }else{
            if(captionBlog.length > 200){
                alert("Caption tidak boleh lebih dari 200 karakter")
            }else{
                var testiObj={
                    judulBlog,captionBlog,kategoriBlog,konten,id_user
                }
                 var isEmpty = !Object.values(testiObj).every(x =>{
                        return x !== ''
                });
                if(!isEmpty){
                    var formData = new FormData()
                    var file = document.getElementById('thumbnail');
                    var imageData = document.getElementById("thumbnail-image");
                    const img = await resizeFile(file,imageData);
                   if(img != undefined){
                    var blob = img.slice(0, img.size, 'image/webp');
                    var imageName = 'thumbnail_blog'+'_'+Date.now()+'.webp'
                    var newFile = new File([blob], `${imageName}`, {type: 'image/webp'});
                    formData.append('files', newFile,newFile.name)
                    var namaThumbnail = newFile.name
                    Axios.post(`https://storage.siapptn.com/uploadblog`,formData)
                    .then((res) => {
                        Axios.post(`${koneksi}/kunci/posttestimoni`,{
                            judul:judulBlog,thumbnail:namaThumbnail,caption:captionBlog,kategori:kategoriBlog,konten,id_user,status_blog:"publish",youtube:youtubeBlog
                        }).then((res)=>{
                            Swal.fire('success', 'Testimoni berhasil di update', 'success').then((res)=>{
                                window.location.href="/testimoni-management"
                            })
                        })
                    })
                    .catch((err) =>{
                    Swal.fire('Oops...', 'Maaf thumbnail gagal terupload harap diulang kembali, pastikan terhubung internet dengan baik.', 'error')
                        console.log(err)
                    }) 
                   }else{
                    Swal.fire("oops","Thumbnail testimoni belum ter upload","error")
                   }
                }else{
                    Swal.fire("oops","Form masih ada yang kosong cek kembali!","error")
                } 
            }
        }
        
        // upload thumnail
        
       
         };
   const [value, setValue] = React.useState(
    EditorUtils.createDocument(
      new ProseMirror.Schema({
        nodes: EditorUtils.nodes,
        marks: EditorUtils.marks,
      }),
      ""
    )
  );
  const onAddFileImageChange = () => {
    if(document.getElementById("thumbnail").files[0] !== undefined) {
        setThumbnailName(document.getElementById("thumbnail").files[0].name)
        setThumbnailSrc(window.URL.createObjectURL(document.getElementById("thumbnail").files[0]))
    }
    else {
        setThumbnailName("Upload thumbnail blog")
    }
}
const onImageInsert = (args) => {
    const { files, view, event } = args;
    const nodeType = view.state.schema.nodes.image;
    const position =
      event.type === "drop"
        ? view.posAtCoords({
            left: event.clientX,
            top: event.clientY,
          })
        : null;
    insertImageFiles({
      view,
      files,
      nodeType,
      position,
    });
    return files.length > 0;
  };
  const textCounter=(e)=>{
    if(e.target.id == "judul"){
         setTitleLength(e.target.value.length)
    }else{
        setDescLength(e.target.value.length)
    }
 }
  const onMount = (event) => {
        const state = event.viewProps.state;
        const plugins = [...state.plugins, insertImagePlugin(onImageInsert)];
        return new ProseMirror.EditorView(
        {
            mount: event.dom,
        },
        {
            ...event.viewProps,
            state: ProseMirror.EditorState.create({
            doc: state.doc,
            plugins,
            }),
        }
        );
    };
if(user != undefined){
    return(
       <div className="container mt-5">
       <h1 className="pt-5">Create article</h1>
            <div className="mb-3 col-8">
                <label htmlFor="judul" className="form-label">Judul</label>
                <input type="text" onChange={textCounter} className="form-control" id="judul" aria-describedby="judul" placeholder="judul artikel" ref={judul}/>
                <div className="d-flex justify-content-end">{titleLength>0 ? <p>{titleLength<=60?<span>{titleLength}</span>:<span className="text-danger">{titleLength}</span>}</p>:<p></p>}</div>
            </div>
            <div className="mb-3 col-8">
                <label htmlFor="judul" className="form-label">Caption</label>
                <textarea onChange={textCounter} type="text" className="form-control" id="caption" aria-describedby="caption" placeholder="Caption artikel" ref={caption}/>
                <div className="d-flex justify-content-end">  <div >{descLength>0 ? <p>{descLength<=200?<span>{descLength}</span>:<span className="text-danger">{descLength}</span>}</p>:<p className="text-right"></p>}</div></div>
           </div>
            <div className="mb-3 col-8">
                <label htmlFor="judul" className="form-label">Thumbnail</label><br/>
                {
                    thumbnailSrc !=''?<img src={thumbnailSrc} width="250px" alt="thumbnail" id="thumbnail-image"/>:''
                }
                <Input type="file" id="thumbnail" name="customFile" label={thumbnailName} onChange={onAddFileImageChange} />
                <small>Thumbnail akan muncul pada halaman beranda dan merupakan gambar yang muncul pertama pada testimoni</small>
            </div>
            <div className="mb-3 col-12">
                <label htmlFor="konten" className="form-label">Konten</label>
                <Editor
                value={value}
                tools={[
                    [Bold, Italic, Underline, Strikethrough],
                    [Subscript, Superscript],
                    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                    [Indent, Outdent],
                    [OrderedList, UnorderedList],
                    FontSize,
                    FontName,
                    FormatBlock,
                    [Undo, Redo],
                    [Link, Unlink, InsertImage, ViewHtml],
                    [InsertTable],
                    [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                    [DeleteRow, DeleteColumn, DeleteTable],
                    [MergeCells, SplitCell],
                ]}
                contentStyle={{
                    height: 630,
                }}
                defaultContent={"sas"}
                onChange={konten}
                ref={editor}
                onMount={onMount}
                />
            </div>
            <div className="mb-3 col-8">
                <label htmlFor="judul" className="form-label">Tambah youtube video (Optional)</label>
                <textarea type="text" className="form-control" id="youtube" aria-describedby="youtube" placeholder="youtube url (Format harus https://www.youtube.com/watch?v=3FZk8bsE69o)" ref={youtube}/>
                <span>Format harus https://www.youtube.com/watch?v=3FZk8bsE69o url bisa dicopy dari youtube browser</span>
            </div>
            <div className="mb-3 col-8">
                <button className="btn btn-utama" onClick={postKonten}>
                    Post testimoni
                </button>
            </div>
                <br />
    
       </div>
    )

}
}
export default CreateTestimoniAdmin;