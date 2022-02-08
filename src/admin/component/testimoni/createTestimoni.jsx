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
    const textarea = React.createRef();
    const judul = React.useRef("");
    const kategori = React.useRef("");
    const caption = React.useRef("");
    var user = JSON.parse(localStorage.getItem("data"))
   const konten =(e)=>{
    setValue(e.value);
   }
   const postKonten = () => {
        const view = editor.current.view;
        var judulBlog = judul.current.value;
        var captionBlog = caption.current.value;
        var kategoriBlog = kategori.current.value
        var konten = EditorUtils.getHtml(view.state)
        var id_user = cookies.get("idUser");
        var testiObj={
            judulBlog,captionBlog,kategoriBlog,konten,id_user
        }
         var isEmpty = !Object.values(testiObj).every(x =>{
                return x !== ''
        });
        if(!isEmpty){
            var formData = new FormData()
            var file = document.getElementById('thumbnail');
           if(file.files[0] != undefined){
            var blob = file.files[0].slice(0, file.files[0].size, 'image/png');
            var imageName = 'thumbnail_blog'+'_'+Date.now()+'.png'
            var newFile = new File([blob], `${imageName}`, {type: 'image/png'});
            formData.append('files', newFile,newFile.name)
            var namaThumbnail = newFile.name
            Axios.post(`https://storage.siapptn.com/uploadblog`,formData)
            .then((res) => {
                Axios.post(`${koneksi}/kunci/posttestimoni`,{
                    judul:judulBlog,thumbnail:namaThumbnail,caption:captionBlog,kategori:kategoriBlog,konten,id_user,status_blog:"publish"
                }).then((res)=>{
                    Swal.fire('success', 'Blog berhasil terupload dan akan menuju proses review', 'success')
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
                <label htmlFor="kategori" className="form-label">Kategori artikel</label>
                <input type="text" className="form-control" id="kategori" aria-describedby="kategori" placeholder="Masukan kategori" ref={kategori}/>
            </div>
            <div className="mb-3 col-8">
                <label htmlFor="judul" className="form-label">Judul</label>
                <input type="email" className="form-control" id="judul" aria-describedby="judul" placeholder="judul artikel" ref={judul}/>
            </div>
            <div className="mb-3 col-8">
                <label htmlFor="judul" className="form-label">Caption</label>
                <textarea type="text" className="form-control" id="caption" aria-describedby="caption" placeholder="Caption artikel" ref={caption}/>
            </div>
            <div className="mb-3 col-8">
                <label htmlFor="judul" className="form-label">Thumbnail</label>
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