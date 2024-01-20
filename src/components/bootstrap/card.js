import reactImage from "./army.jpg"


const ProfileCard =(props)=>{
console.log(props);


 
    return(
        <>
        <div className="card" style={{width:"100%"}}>
  <img className="card-img-top" src={reactImage} alt="Card image" style={{width:"100%" }}/>
  <div className="card-body" >
    <h4 className="card-title">{props.profile.name}</h4>
    <p className="card-text">{props.profile.designation}</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>
</>
    )
}

export default ProfileCard