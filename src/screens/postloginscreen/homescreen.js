import NavBar from "../../navigation/navbar/navbar"
import FooterName from "../../navigation/footer/footer"
import MapMethod from "../../components/bootstrap/mapmethod"
import UseEffectEx1, { ProductsListing } from "../../components/hooks/useeffect/useeffectex1"
import UseEffectEx2 from "../../components/hooks/useeffect/useeffectex2"
import UseEffect3 from "../../components/hooks/useeffect/useeffectex3"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Loader from "../../components/loaders/loader"
import { Link } from "react-router-dom"
import Card1 from "../../components/bootstrap/card1"
import { DataShare } from "../../navigation/navigation"


const HomeScreen = ()=>{

 

  const [productsListing,SetProductsListing]=useState([])
  const[totalPrice,SetTotalPrice]=useState(null)
  const {darkTheme,changeTheme}=useContext(DataShare)
    useEffect(()=>{
        fetchData();
        console.log("Component mount")
    },[])

    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
              if(response.status===200){
                const newResponse=response.data.map(eachObj=>{
                  return{...eachObj,count:1,total:eachObj.price}
                })


                SetProductsListing(newResponse)
                const result=sumOfPrice(response.data)
                // console.log(result)
              }
        })

    }
    const sumOfPrice=(arryOfObjects)=>{
      const result=arryOfObjects.reduce((initial,eachObject)=>initial+eachObject.price,0)
      return result
    }

    const handlerIncrement=(data)=>{
      console.log(data);


    }
 
    const controlTheme=()=>{
       changeTheme()
    }
    return(

      <>
      <NavBar/>
      <div style={{height:50,width:100,backgroundColor:darkTheme?"black":"red"}}>
                
                </div>
                <button onClick={controlTheme}>change theme</button> 
                <h1>this home screen</h1>
        <h1>Total value of products:{totalPrice}</h1>     
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",height:"150px",gridGap:"10px"}}>
      
      {
        productsListing.map((data)=>{
    return(   
       <>

<center>
<div style={{border:"2px solid black"}}>
   
    <img src={data.image} alt="" width="100px" height="100px"/><br/>
    <b>{data.title}</b><br/><br/>
    <h5>Price : {data.price}</h5>
    <h5>Rating : {data.rating.rate}</h5>
    <h5>Count : {data.rating.count}</h5>
    <Link to={`/hyderabad/${data.id}`}>
    <button>Seemore</button>
    </Link> 
    <button onClick={( )=>handlerIncrement(data)}>Increment</button> 
       <button>Decrement</button>
    </div>
    </center>
          
          </>)
        })
    }
        </div>

        </>
    )
}

export default HomeScreen

// export const ProductsListingComponents=({data,handlerIncrement})=>{
//   return(
//       <>
//       <div>
//        <button onClick={( )=>handlerIncrement(data)}>Increment</button> 
//        <button>Decrement</button> 
//       <Card1 title={data.title} image={data.image} id={data.id}/>
//        {/* <h1>{data.title}</h1>  */}
//       {/* <img src={data.image} alt={data.category} width={100} height={100}/>  */}
            
  // <Link to={`/hyderabad/${data.id}`}>
  //     <button >click view product </button>
  //     </Link> 
//       {/* <h3>{data.price}</h3> */}
//       <h2>{data.count}</h2>
        
//       </div>
//       </>
//   )
// }