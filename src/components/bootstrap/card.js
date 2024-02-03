import React from "react";
import reactImage from "./army.jpg";

const ProfileCard = (props) => {
  console.log(props);

  return (
    <>
      {/* <div classNameName="card" style={{ width: "400px" }}>
        <img
          classNameName="card-img-top"
          src={reactImage}
          alt="Card image"
          style={{ width: "300px",height:"100%" }}
        />
        <div classNameName="card-body">
          <h4 classNameName="card-title">{props.name}</h4>
          <p classNameName="card-text">{props.description}</p>
          <a href="#" classNameName="btn btn-primary">
            See Profile
          </a>
        </div>
      </div> */}
      <div className="card" style={{width: "18rem;"}}>
  <img src={reactImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">See More</a>
  </div>
</div>
    </>
  );
};

export default ProfileCard; 
