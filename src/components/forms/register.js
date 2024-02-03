import { useContext, useState } from "react";
import { DataShare } from "../../navigation/navigation";

const RegistrationForm=()=>{

    const[UserName,setUserName]=useState("")
    const[Password,setPassword]=useState("")
    const[Email,setEmail]=useState("")
    const[Gender, setGender] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("");


    // const {loginTrue}=useContext(DataShare)

    const[UserNameError,setUserNameError]=useState("")
    const[PasswordError,setPasswordError]=useState("")
    const[EmailError,setEmailError]=useState("")
    const[ConfirmPasswordError, setConfirmPasswordError] = useState("")
  
 

const userNameHandler=(event)=>{
    setUserName(event.target.value)
    // console.log(event.target.value)
    if(event.target.value.length>10){
        setUserNameError("username is invalid")
      
    }
    else{setUserNameError("")}
}


const userPasswordHandler=(event)=>{
    setPassword(event.target.value)
    console.log(event.target.value)
const result=validatePassword(event.target.value)
if(result){
    console.log("password valid")
    setPasswordError("")
}
 else {
    setPasswordError("")
 }  
}
const EmailHandler=(event)=>{
setEmail(event.target.value)
// console.log(event.target.value)
const Final=validateEmail(event.target.value)
if(Final){
    console.log("email id valid")
setEmailError("")
}
else{
setEmailError("email is invalid")
}
}

// const GenderHandler = (event) => {
//     setGender(event.target.value);
//   };


  const confirmPassHandler = (event) => {
    setConfirmPassword(event.target.value);
};

// function validateEmail(email) {
//     const regex = /^([0-9a-zA-Z]([-\\.][0-9a-zA-Z]+))@([0-9a-zA-Z]([-\\.][0-9a-zA-Z]+))\.([a-zA-Z]{2,9})$/;
//     if (!regex.test(email)) {
//        console.log("enter a valid email")
//         return false;
//     }

//     return true ;
// }

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
     .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       );
   };

function validatePassword(psw) {
    let msg = true;

    switch (true) {
        case (psw.length < 8 || psw.length > 13):
            msg = false;
            break;
        case !(/[0-9]/.test(psw)):
            msg = false;
            break;
        case !(/[a-z]/.test(psw)):
            msg = false;
            break;
        case !(/[A-Z]/.test(psw)):
            msg = false;
            break;
        case UserName && psw.includes(UserName):
            msg = false;
            break;
        default:
            break;
    }

    return msg;
}


const handleSubmit = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        return;
    } else {
        setConfirmPasswordError("");
        console.log("you have been successfully logged in")
    }

    const UserDetails = {
        UserName,
        Password,
        ConfirmPassword,
        Email,
        Gender,
    };
    console.log(UserDetails);
    alert("successfully logged in")
   console.log("successfully logged in")
};
    return(
        <>
        <form onSubmit={handleSubmit}  style={{backgroundColor:"lightgrey"}}>
    
          <div className="mb-3 mt-3">
         <label htmlFor="usr" className="form-label"> User Name</label>
            <input type="text" className="form-control" id="usr" placeholder="Enter username" name="pswd" value={UserName}  onChange={userNameHandler}/>
          {
            UserNameError?
        <h2 style={{color:"red"}}>{UserNameError}</h2>:
        null
          }
          
          </div>
        

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label"> Password</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={Password} onChange={userPasswordHandler}/>
            {
            PasswordError?
        <h2 style={{color:"red"}}>{PasswordError}</h2>:
        null
          }
          </div>



          <div className="mb-3">
  <label htmlFor="confirmPwd" className="form-label">Confirm Password:</label>
  <input type="password"  className="form-control" id="confirmPwd" placeholder="Confirm password" name="confirmPwd" value={ConfirmPassword} onChange={confirmPassHandler}/>
  {
        ConfirmPasswordError
           ?
        <h2 style={{color:"red"}}>{ConfirmPasswordError}</h2>:
        null
          }
</div>



          <div className="mb-34">
            <label htmlFor="ema" className="form-label"> Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={Email} onChange={EmailHandler}/>
            {
           EmailError?
        <h2 style={{color:"red"}}>{EmailError}</h2>:
        null
          }
          </div>
          <br></br>


          {/* <div className="mb-343">
  <label htmlFor="gen" className="form-label"> Gender</label><br/><br/>
  <input type="radio" id="male" name="gender" value="Male" onChange={GenderHandler}/>
  <label htmlFor="male">Male</label><br/><br/>
<input type="radio" id="female" name="gender" value="Female" onChange={GenderHandler}/>
  <label htmlFor="female">Female</label>
</div>
<br/><br/> */}

{
  !UserNameError && !PasswordError && !EmailError && !ConfirmPasswordError &&
  <button type="submit" className="btn btn-primary">Register Now</button>
}

        </form>
      </>
    );
    }
    export default RegistrationForm