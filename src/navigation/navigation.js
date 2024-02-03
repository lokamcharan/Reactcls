import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomeScreen from "../screens/postloginscreen/homescreen"
import SettingScreen from "../screens/postloginscreen/settingscreen"
import ProductsScreen from "../screens/postloginscreen/productscreen"
import AboutScreen from "../screens/postloginscreen/aboutscreen"
import ProductDetails from "../screens/postloginscreen/produnctdetails"
import { createContext, useContext, useState } from "react"
import LoginScreen from "../screens/preloginscreens/loginscreen"
import PostLogin from "./postlogin"
import PreLogin from "./prelogin"

  export const DataShare=createContext()

const NavigationStack=()=>{

    const[name,SetName]=useState("Charan")
    const[darkTheme,SetDarkTheme]=useState(false)
    const[login,SetLogin]=useState(false)

    const changeTheme=()=>{
        SetDarkTheme(!darkTheme) 
    }
    const loginTrue=()=>{
        SetLogin(true)
    }
    return(

        <DataShare.Provider value={{name,darkTheme,changeTheme,loginTrue}}>
        <BrowserRouter>
        {

        login
            ?
            <PostLogin/>
            // <PreLogin/>
             :
            // <PostLogin/>
          <PreLogin/>

           }
        </BrowserRouter>
        
        
        </DataShare.Provider>
    )
}

export default NavigationStack

