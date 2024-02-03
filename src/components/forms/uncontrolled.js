import { useRef , useState, useContext} from "react"
import { DataShare } from "../../navigation/navigation"



const Uncontrolled=()=>{
const emailRef=useRef()
const passwordRef=useRef()

const {loginTrue}=useContext(DataShare)
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
  alert("successful logined")
  console.log(loginTrue)
  loginTrue()
 
  setError("")
}

})
.catch(err=>console.log(err));
            
    }
    return(
        <>
    <form action="/action_page.php" onSubmit={handleSubmit}>
  <div className="form-group">
    <label >User Name:</label>
    <input type="text" className="form-control" id="usename" ref={emailRef} />
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

// import { useContext, useRef, useState } from "react"
// import { DataShare } from "../../navigationStack/navigation"

// const Uncontrolled =()=>{

//     const emailRef=useRef()
//     const passwordRef=useRef()
//     const[error,setError]=useState("")

//     const{loginTrue}=useContext(DataShare)




//     const handleSubmit=(event)=>{

//         event.preventDefault()


//         console.log(emailRef.current.value)
//         console.log(passwordRef.current.value)

//         if(passwordRef.current.value.length<3){
//             alert("please enter more than 3 characters")
//         }else{

//             const userInfo={
//                 username:emailRef.current.value,
//                 password:passwordRef.current.value
//             }
//             hitServer(userInfo)

            



//         }
//         // alert("clicked")

//     }

//     const hitServer =(data)=>{
//         fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data)
// })
// .then(res => res.json())
// .then(res=>{
//   if(res.message){
//     alert(res.message)
//     setError(res.message)

//   }else{
//     console.log(res)
//     alert("successfull login")
//     loginTrue()
//     // localStorage.setItem("userLoginInfo",res.data)
//     setError("")
//   }



// })
// .catch(err=>console.log(err))
//     }


//     return(
//         <>
     
//         <form  onSubmit={handleSubmit} >
//   <div className="mb-3 mt-3">
//     <label  className="form-label">Email:</label>
//     <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"  ref={emailRef}  />
//   </div>
//   <div className="mb-3">
//     <label className="form-label">Password:</label>
//     <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={passwordRef} />
//   </div>
//   <div className="form-check mb-3">
//     {/* <label className="form-check-label">
//       <input className="form-check-input" type="checkbox" name="remember"/> Remember me
//     </label> */}
//   </div>
//   {
//     error ?
//     <h2 style={{color:"red"}} >{error}</h2>
//     :
//     null
//   }
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </>
        
//     )
// }

// export default Uncontrolled


// Uncontrolled: dom will have the control over the input elements 
// 2. field validation not possile , form or overrall Submit validation

// ref is a attribute which connect the dom with the input elements 


// useRef : it is a hook in react which acts a bridge btween dom and input 
// 1. it doesn't cause any re-render 


// steps :

// 1. create a reference using useRef hook 
// 2. attach reference to the input by ref attribute 
// 3. to collect the user input ref.current.value

// tasks :
// 1. Repeat the class 
// 2. Form validation for username and password 