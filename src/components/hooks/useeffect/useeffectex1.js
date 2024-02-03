import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../loaders/loader"




const UseEffectEx1=()=>{

    const [productsListing,SetProductsListing]=useState([])
    useEffect(()=>{
        fetchData();
        console.log("Component mount")
    },[])

    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
              if(response.status===200){
                SetProductsListing(response.data)
              }
        })

    }
    return(
        <>
    <h1>UseEffectEx1</h1>

    {
        productsListing.length>0 ? productsListing.map(product=><ProductsListing key={product.id} data={product}/>)
        :<Loader/>
    }
        </>
    )

}
export default UseEffectEx1 



export const ProductsListing=({data})=>{
    return(
        <>
        <h1>{data.title}</h1>
        </>
    )
}