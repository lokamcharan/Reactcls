import { useContext } from "react"
import MapMethod from "../../components/bootstrap/mapmethod"
import FooterName from "../../navigation/footer/footer"
import NavBar from "../../navigation/navbar/navbar"
import { DataShare } from "../../navigation/navigation"

const ProductsScreen =()=>{
    const{name,darkTheme}=useContext(DataShare)
    return(
        <>
    <NavBar/>
    <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>
                
        </div>
        
   {/* <MapMethod/> */}
    <FooterName/>
       
        </>
    )
}

export default ProductsScreen