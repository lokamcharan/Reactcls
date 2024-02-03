import { Route, Routes } from "react-router"
import LoginScreen from "../screens/preloginscreens/loginscreen"
import InvalidScreen from "../screens/preloginscreens/invalidscreen"


function PreLogin() {
    return (
      <Routes>

  <Route path="/" Component={LoginScreen}/>
  <Route path="*" Component={InvalidScreen}/>
      </Routes>
    
    )
  }
  
  export default PreLogin