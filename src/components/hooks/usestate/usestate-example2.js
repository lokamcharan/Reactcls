
import React, { useState } from "react"

export const UseSateExample2=()=>{
    const [current,setCurrent]=useState([{
        id:1,
        name:"Krishil",
        salary:10000
    },{
        id:2,
        name:"Sony",
        salary:20000
    }])
   
    const incrementSalary = (data) => {
        setCurrent((prevCurrent) => {
          return prevCurrent.map((item) =>
            item.id === data.id ? { ...item, salary: item.salary + 1000 } : item
          );
        });
      };
      const decrementSalary=(data)=>{
        setCurrent((prevCurrent) => {
            return prevCurrent.map((item) =>
              item.id === data.id ? { ...item, salary: item.salary - 1000 } : item
            );
          });

      }

    return(
        <>
            {
                current.map((value)=><React.Fragment key={value.id}>
                <>
                <h2>{value.name}</h2>
                <h2>{value.salary}</h2>
                <button onClick={()=>incrementSalary(value)}>click to increment salary</button>
                <button onClick={()=>decrementSalary(value)}>click to decrement salary</button>
                </>
                </React.Fragment>)
            }
           
        </>
    )
}
export default UseSateExample2