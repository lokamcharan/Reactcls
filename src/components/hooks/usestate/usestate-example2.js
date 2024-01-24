import { getValue } from "@testing-library/user-event/dist/utils"
import React,   { useState } from "react"




const UseStateExample2 =()=>{

    const[current,setCurrent]=useState([{
        id:1,
        name:"sushanth",
        salary:10000
    },
    {
        id:2,   
        name:"mani",
        salary:20000
    }
    
])
const [salary,setSalary]=useState(current[0].salary);

const incrementSalary=()=>{
    setSalary(salary+100)

}
const decrementSalary=()=>{

    setSalary(salary-100)
}


    return(
        <>
        {
current.map((value)=>(<React.Fragment key={value.id}>
<h1>{value.name}</h1>
<h1>{value.salary}</h1>
<button onClick={incrementSalary}>Increment salary</button>
<button onClick={decrementSalary}>Decrement salary</button>
</React.Fragment>)
        )}

        </>
    )
}
export default UseStateExample2 