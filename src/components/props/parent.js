

import Button from "./button2"

const ParentComponent =()=>{
    return(
        <>

        <h1>hello</h1>
        
        <Button/>

        <Receiver>
            <h1> I am charan</h1>
            <h1> I am cherry</h1>
            <h1> I am kanna</h1>
        </Receiver>
        </>
    )
}

export default ParentComponent


const Receiver=({children})=>{
    return(
        <>
        {children}
        </>
    )
}