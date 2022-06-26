import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductItem from "./components/ProductItem";
import { IProduct, ProBilgiler } from "./models/IProducts";



function Dashboard() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [arr, setArr] = useState<ProBilgiler[]>([])

 
  useEffect(() => {
    const sendParams={
      ref:'74430d47fa16b4c53c0fe59510752c70',
      start:'0'
    }
    const url = 'https://www.jsonbulut.com/json/product.php'
    axios.get<IProduct>(url,{params:sendParams}).then(res => {
      const arrx = res.data.Products[0].bilgiler
      setArr(arrx)
    })
    
  },[])
  
 
  
  return (
    <>
    <NavBar></NavBar>
    
    <input onChange={(evt)=>setSearch(evt.target.value) } className="form-control" placeholder="search..."></input>
    <div className="row p-3">
    {arr.map((item,index)=>
      <ProductItem key={index} pro={item}/>
    )}
    </div>
    </>
  )
}

export default Dashboard