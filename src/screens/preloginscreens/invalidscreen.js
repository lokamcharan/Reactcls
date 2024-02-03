

import { useNavigate } from "react-router-dom"

const InvalidScreen =()=>{

      const navigate = useNavigate()
      const handleNavigate=()=>{
        navigate("/")
      }


    return(
        <>
        <h1>Invalid screen page not found , please check the url</h1>
        <button onClick={handleNavigate}  >Click to login screen</button>
        </>
    )
}


export default InvalidScreen