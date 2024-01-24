 import React,{ useState } from "react"


const ButtonCircles=()=>{
    
    const initialValues=[]
    const[currentValue,updateValue]=useState(initialValues)
    let [defaultColor,changeColor]=useState(false)

    // const[firstColor,secondColor]=useState("black")
    
    const increment=()=>{
         updateValue(currentValue=>[...currentValue,true])
    }

    const colorChange=()=>{
        changeColor(defaultColor=!defaultColor)
    }

    return(
        <>
        <button onClick={increment}>Add circles</button>
        
        
        {currentValue.map((value,ind)=>(
            <React.Fragment key={ind}>
                  <h1 style={{border:"5px solid black", borderRadius:"50%",height:"100px",width:"100px", background:!defaultColor?"white":"black"}} onClick={colorChange}></h1>
            </React.Fragment>
        ))}
        
        </>
    )
}
export default ButtonCircles;

