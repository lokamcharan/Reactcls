import { useContext} from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../navigation"


const NavBar=()=>{
    const sharedContext=useContext(DataShare)
    console.log(sharedContext);


    const{name}=sharedContext
    const link={
        textDecoration:"none",color:"black"
    }
    //  const display={
    //  display:"flex"
    // }
    // const liststyle={
    //     margin:100
    // }
    return(
        
       <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
 
      <p className="nav-item">
       <Link to="/" style={link}>{name}</Link>
      </p>
     
      <p className="nav-item" >
      <Link to="/about" style={link}>About</Link>
      </p>
      <p className="nav-item" >
      <Link to="/product" style={link}>Product</Link> 
      </p>
      <p className="nav-item" >
      <Link to="/setting" style={link}>Setting</Link> 
      </p>
    
  </div>
</nav>


        
    )
}
export default NavBar