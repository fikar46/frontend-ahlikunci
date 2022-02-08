import { useState } from "react";



const MapPaginationComponent=(pagination,page,setPage,funcGet)=>{
    const [max, setMax ] =useState(10)
    const [min, setMin ] =useState(0)
    var paginations = pagination
    var activePage = page
    var arrList =[]
    for(let i = 0; i < paginations; i++){
        if(activePage == i){
            var classActive = "active"
        }else{
            var classActive = "not-active"
        }
        var list =  <li className={`page-item ${classActive}`}><a className="page-link" onClick={()=>{
            setPage(i)
            funcGet(i)
        }}>{i+1}</a></li>
        arrList.push(list)
    }
    var data = arrList.slice(min, max).map((item)=>{
    return item
    })
        
    return(
        <div className="d-flex justify-content-end">
                              <nav aria-label="Page navigation example">
       <ul className="pagination">
           {
               activePage>0? <li className="page-item"><a className="page-link" onClick={()=>{
                if(min !=0){
                    setMin(min-1)
                } 
                if(max > 10){
                    setMax(max-1)
                } 
                setPage(activePage-1)
                funcGet(activePage-1)
            }}>Previous</a></li> :<div></div>
           }
            {data}
            {
                activePage < paginations-1?<li className="page-item"><a className="page-link" onClick={()=>{
                    
                    if((paginations-10)>min){
                        setMin(min+1)  
                        setMax(max+1)                      
                    }
                    setPage(activePage+1)
                    funcGet(activePage+1)
                }}>Next</a></li>:<div></div>
            }
        </ul> 
    </nav>
                        </div>
     
          
    )
    
}

export default MapPaginationComponent