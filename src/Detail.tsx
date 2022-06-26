import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import { ProBilgiler } from "./models/IProducts"

function Detail() {
    const nav = useNavigate()
    const loc = useLocation()
    const [pro, setPro] = useState<ProBilgiler>()
    useEffect(() => {
        if (loc.state) {
            const pro =loc.state as ProBilgiler
            setPro(pro)
        }
        else {
            nav('/dashboard')
    
        }
    }, [])
    
   
  return (
    <>
       
       {pro && 
       <>
         <NavBar></NavBar>
         
         <div className="row mt-3">
            <div className="col-sm-5">
               <img src={pro.images[0].normal} className="img-thumbnail" height={300}></img>
            </div>
            <div className="col-sm-7">
            <h2>{pro.productName}<span className="badge bg-danger">${pro.price}</span></h2>
            <p dangerouslySetInnerHTML={{__html:pro.description}}></p>
            </div>

         </div>
       </>
       }
    </>
  )
}

export default Detail