import { useRef ,use, useState} from "react"



const Uncontrolled=()=>{
const emailRef=useRef()
const passwordRef=useRef()
 const[error,setError]=useState("")

    const handleSubmit=(event)=>   {

        event.preventDefault()

        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        if(passwordRef.current.value.length<5){
            alert("Plz Enter More Than 5 Charcters")
        }
        //  alert("clicked")
        else{
             const userInfo={
                username:emailRef.current.value,
                password:passwordRef.current.value
             }
             hitSever(userInfo)
        }

    }

    const hitSever=(data)=>{
        fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res=>{
if(res.message){
  alert(res.message)
  setError(res.message) 
}else{
  alert("succesfully login")
  setError("")
}

})
.catch(err=>console.log(err));
            
    }
    return(
        <>
    <form action="/action_page.php" onSubmit={handleSubmit}>
  <div className="form-group">
    <label >Email address:</label>
    <input type="email" className="form-control" id="email" ref={emailRef} />
  </div>
  <div className="form-group">
    <label >Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
  </div>
  {
    error ? 
    <h1 style={{color:"red"}}>{error}</h1>
    :
    null
  }
  <button type="submit" className="btn btn-default">Submit</button>
</form>

        </>
    )
}
export default Uncontrolled