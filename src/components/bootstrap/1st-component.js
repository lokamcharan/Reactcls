 import ProfileCard from "./card"


  const BootstrapLayout=()=>{

    const members=[{

    
      name:"kanna" ,
      color:"red" ,
      designation:"CEO"
    },{
      name:"krshi", color:"yellow" ,designation:"HR"
    },{
     name:"harsha" ,color:"blue", designation:"TL"

    }
  ]
    return(

        <>
        <div className="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div className="container">
  <div className="row">
    <div className="col-sm-4">
      <ProfileCard profile={members[0]}/>
    </div>
    <div className="col-sm-4">
      <ProfileCard  profile={members[1]}/>
    </div>
    <div className="col-sm-4">
    <ProfileCard profile={members[2]}/>
    </div>
  </div>
</div>
        </>
    )
  }

  export  default BootstrapLayout