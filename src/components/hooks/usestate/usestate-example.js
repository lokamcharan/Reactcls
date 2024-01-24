import { useState } from "react"


const UseStateExample1=()=>{


    const initialValue=5

    const [count,setCount]=useState(initialValue)

     const [Timer,setTimer]=useState(initialValue)
    const handleIncrement =()=>{
        setCount(count+1)
    }

    const handleTimer=()=>{
        setInterval(()=>{
            if(Timer===0){
                alert("timeup")
                
            }else{
                setTimer(timer=>timer+1)
            
            }
            
        },1000)
        
        }
    
       

    return(
        <>
        <h1>useState Count   {count}</h1> 
        <button onClick={handleIncrement}>Click To Increment</button>
        <br></br><br></br><br></br>
        <h1>useState Timer  {Timer}</h1> 
        <button onClick={handleTimer}>Click To Start Timer</button>
        </>
    )
}
export default UseStateExample1