import FooterName from "../../navigation/footer/footer"
import FormV from "../../navigation/formv/formv"
import NavBar from "../../navigation/navbar/navbar"
import MapMethod from "../../components/bootstrap/mapmethod"
import { useContext } from "react"
import { DataShare } from "../../navigation/navigation"
import UseReducerExample from "../../components/hooks/usereducer/usereducer"


const AboutScreen =()=>{


    const data=useContext(DataShare)
    // console.log(data);
    

    const{name,darkTheme}=data
    return(
        <>
        <NavBar/>
        <div style={{height:100,width:100,backgroundColor:darkTheme?"black":"red"}}>
                
        </div>
        <UseReducerExample/>
        {/* <MapMethod/> <br></br>   */}
        <FormV/>
        <h1>i am {name}</h1>
        <FooterName/>
    
        </>
    )
}

export default AboutScreen