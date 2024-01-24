import React, { useState } from "react"


const UseStateExample3=()=>{

    const initialValue=["cricket","kabadi"]
    const[list,setList]=useState(initialValue)
const handleAddGame=()=>{
const newGame="UNO"
setList([...list,newGame])
}

    return(
        <>
        
        <h1>Hello</h1>
        <button onClick={handleAddGame}>click to add</button>
         <ol>
         {
            list.map((value,index)=><React.Fragment key={index}>
                <li>{value}</li>
            </React.Fragment>
            )
         }
         </ol>
        </>  
    )
}

export default UseStateExample3