import { Route, Router, Routes } from "react-router"
import HomeScreen from "../screens/postloginscreen/homescreen"
import SettingScreen from "../screens/postloginscreen/settingscreen"
import ProductsScreen from "../screens/postloginscreen/productscreen"
import AboutScreen from "../screens/postloginscreen/aboutscreen"
import ProductDetails from "../screens/postloginscreen/produnctdetails"


function PostLogin() {
  return (

<Routes>

       <Route path="/" Component={HomeScreen}/>
            <Route path="/setting" Component={SettingScreen}/>
            <Route path="/product" Component={ProductsScreen}/>
            <Route path="/about" Component={AboutScreen}/>
            <Route path="/hyderabad/:id" Component={ProductDetails}/>
            </Routes>

  
  )
}

export default PostLogin